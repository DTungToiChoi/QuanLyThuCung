import { useLocation, useNavigate } from '@tanstack/react-router';
import { bqlMenuItems } from '../constants/menu';
import type { MenuItem } from '../constants/menu';

export const useMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname;

  // Tìm các key cha (SubMenu) đang chứa đường dẫn hiện tại
  const getOpenKeys = () => {
    const allMenus = bqlMenuItems;


    const openKeys: string[] = [];

    const findKey = (items: MenuItem[], parentKey?: string) => {
      for (const item of items) {
        if (!item) continue;
        
        // Nếu là mục con và khớp với pathname
        if ('key' in item && item.key === pathname) {
          if (parentKey) openKeys.push(parentKey);
          return true;
        }

        // Nếu có các con (SubMenu)
        if ('children' in item && Array.isArray(item.children)) {
          if (findKey(item.children as MenuItem[], (item as any).key)) {
            if (parentKey) openKeys.push(parentKey);
            openKeys.push((item as any).key);
            return true;
          }
        }
      }
      return false;
    };

    findKey(allMenus);
    return openKeys;
  };

  const onMenuClick = ({ key }: { key: string }) => {
    if (key.startsWith('/')) {
        navigate({ to: key });
    }
  };

  return {
    selectedKeys: [pathname],
    openKeys: getOpenKeys(),
    onMenuClick,
  };
};