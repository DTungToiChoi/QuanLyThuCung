import type { AppMenuItem } from "@/shared/components/sidebar/types";
import type { MenuItem } from "@/shared/services";

// ---------------------------------------------------------------------------
// Private helpers
// ---------------------------------------------------------------------------

/**
 * Strip "/xem-chi-tiet" from a route while preserving the query string.
 * e.g. "/some-path/xem-chi-tiet?id=1" → "/some-path?id=1"
 */
const normalizeRoute = (route: string): string => {
  if (!route.includes("/xem-chi-tiet")) return route;
  const [pathPart, queryPart] = route.split("?");
  const basePath = pathPart.split("/xem-chi-tiet")[0];
  return queryPart ? `${basePath}?${queryPart}` : basePath;
};

/**
 * Returns true when a menu item's path matches the given route.
 * Supports partial matching: route contains duongDan.
 */
const routeMatchesItem = (duongDan: string, route: string): boolean => {
  if (!duongDan) return false;
  return duongDan === route || route.includes(duongDan);
};

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export const mapMenuItemToAppMenuItem = (item: MenuItem): AppMenuItem => {
  const isParent = Array.isArray(item.capCon) && item.capCon.length > 0;
  return {
    key: isParent ? `menu-${item.id}` : item.duongDanTrucTiep || `leaf-${item.id}`,
    label: <span className="menu-label">{item.ten}</span>,
    icon: item.bieuTuong ? (
      <img
        src={`${import.meta.env.VITE_RESOURCE_URL}${item.bieuTuong}`}
        width={24}
        height={24}
      />
    ) : undefined,
    level: item.capdo,
    menuId: item.id,
    children: isParent ? item.capCon.map(mapMenuItemToAppMenuItem) : undefined,
    disabled: !item.coTheTruyCap,
  };
};

export const sortMenuByThuTu = (items: MenuItem[]): MenuItem[] =>
  [...items]
    .sort((a, b) => a.thuTuHienThi - b.thuTuHienThi)
    .map((item) => ({
      ...item,
      capCon: item.capCon?.length ? sortMenuByThuTu(item.capCon) : item.capCon,
    }));

export const findRootMenuByRoute = (
  items: MenuItem[],
  route: string | string[],
  parents: MenuItem[] = [],
): MenuItem | null => {
  // Normalize once at the start of each call — handles "xem-chi-tiet" paths
  const normalizedRoute = typeof route === "string" ? normalizeRoute(route) : route;

  for (const item of items) {
    const newParents = [...parents, item];

    const isMatch =
      Array.isArray(normalizedRoute)
        ? normalizedRoute.some((r) => routeMatchesItem(item.duongDanTrucTiep, r))
        : routeMatchesItem(item.duongDanTrucTiep, normalizedRoute);

    if (isMatch) return newParents[0]; // root ancestor

    if (item.capCon?.length) {
      const found = findRootMenuByRoute(item.capCon, normalizedRoute, newParents);
      if (found) return found;
    }
  }

  return null;
};

export const findExactMenuRoute = (items: MenuItem[], path: string): MenuItem | null => {
  for (const item of items) {
    const itemPath = item.duongDanTrucTiep?.split("?")[0];
    if (itemPath && (itemPath === path || path.includes(itemPath))) return item;

    if (item.capCon?.length) {
      const found = findExactMenuRoute(item.capCon, path);
      if (found) return found;
    }
  }
  return null;
};

export const findExactRoute = (
  items: AppMenuItem[] | undefined,
  path: string,
): AppMenuItem | null => {
  if (!items) return null;
  const normalizedPath = normalizeRoute(path);

  for (const item of items) {
    const isMatch = routeMatchesItem(item.key, normalizedPath);
    if (isMatch) return item;

    if (item.children?.length) {
      const found = findExactRoute(item.children, normalizedPath);
      if (found) return found;
    }
  }
  return null;
};
