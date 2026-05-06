import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { Menu } from "antd";
import { SidebarHeader } from "./styled";
import { QUAN_LY_NHAN_VIEN } from "../constants";

interface Props {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}

export default function MenuSideBar({ collapsed, setCollapsed }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    {
      key: QUAN_LY_NHAN_VIEN,
      label: "Quản lý nhân viên",
    },
    // {
    //   key: "/thiet-lap-cau-hinh",
    //   label: "Thiết lập cấu hình",
    //   children: [
    //     {
    //       key: "/thiet-lap-cau-hinh/tang",
    //       label: "Quản lý tầng",
    //     },
    //     {
    //       key: "/thiet-lap-cau-hinh/khu-vuc",
    //       label: "Quản lý khu vực",
    //     },
    //     {
    //       key: "/thiet-lap-cau-hinh/diem-kinh-doanh",
    //       label: "Điểm kinh doanh",
    //     },
    //   ],
    // },
    {
      key: "/xu-ly-vi-pham",
      label: "Xử lý vi phạm",
    },
    {
      key: "/bao-cao",
      label: "Báo cáo",
    },
  ];

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
        {!collapsed && <span>Chợ Số</span>}
      </SidebarHeader>

      <Menu
        theme="dark"
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname.split("/")[1]]} // mở submenu cha
        items={items}
        onClick={({ key }) => navigate({ to: key })}
        style={{ borderRight: 0, backgroundColor: "transparent" }}
      />
    </>
  );
}