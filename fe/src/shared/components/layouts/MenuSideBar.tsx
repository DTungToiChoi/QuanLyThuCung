import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useLocation } from "@tanstack/react-router";
import { Menu } from "antd";
import { useState } from "react";
import { SidebarHeader } from "./styled";
import tokenManager from "@/shared/utils/tokenManager";
import { getMenuItems } from "@/shared/utils/menu-filter";
import { useMenu } from "@/shared/hooks/useMenu";

interface Props {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export default function MenuSideBar({ collapsed, setCollapsed }: Props) {
  const { selectedKeys, openKeys, onMenuClick } = useMenu();
  const location = useLocation();

  // Quản lý openKeys chủ động bằng State
  const [localOpenKeys, setLocalOpenKeys] = useState<string[]>(openKeys);
  const [lastPath, setLastPath] = useState(location.pathname);

  // Cập nhật State NGAY TRONG RENDER khi route thay đổi để tránh flickering
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname);
    const mergedKeys = Array.from(new Set([...localOpenKeys, ...openKeys]));
    setLocalOpenKeys(mergedKeys);
  }

  const role = tokenManager.getRoles()?.[0] || 'admin';
  const menuItems = getMenuItems(role);

  return (
    <>
      <SidebarHeader
        $collapsed={collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <MenuUnfoldOutlined style={{ fontSize: "18px" }} />
        ) : (
          <MenuFoldOutlined style={{ fontSize: "18px" }} />
        )}
        {!collapsed && (
          <span
            style={{
              fontSize: "18px",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Chợ Số
          </span>
        )}
      </SidebarHeader>
      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={selectedKeys}
        openKeys={localOpenKeys}
        onOpenChange={(keys) => setLocalOpenKeys(keys)}
        items={menuItems}
        onClick={onMenuClick}
        style={{ borderRight: 0, backgroundColor: "transparent" }}
      />
    </>
  );
}
