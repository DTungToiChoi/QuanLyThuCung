import {
  BarChartOutlined,
  CalendarOutlined,
  GiftOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ScissorOutlined,
  ShopOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { Menu } from 'antd'
import {
  QUAN_LY_NHAN_VIEN,
  TONG_QUAN_ADMIN,
  LICH_HEN,
  DICH_VU,
  KHACH_HANG_VIP,
  KHO_HANG,
} from '../constants'
import {
  SidebarBrand,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarSurface,
  SidebarTitle,
  SidebarTitleMain,
  SidebarTitleSub,
  SidebarToggle,
} from './styled'

interface Props {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
}

export default function MenuSideBar({ collapsed, setCollapsed }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  const items = [
    {
      key: TONG_QUAN_ADMIN,
      icon: <BarChartOutlined />,
      label: 'Tổng quan',
    },
    {
      key: QUAN_LY_NHAN_VIEN,
      icon: <TeamOutlined />,
      label: 'Quản lý nhân viên',
    },
    {
      key: LICH_HEN,
      icon: <CalendarOutlined />,
      label: 'Lịch hẹn',
    },
    {
      key: DICH_VU,
      icon: <ScissorOutlined />,
      label: 'Dịch vụ & Combo',
    },
    {
      key: KHACH_HANG_VIP,
      icon: <GiftOutlined />,
      label: 'Khách hàng VIP',
    },
    {
      key: KHO_HANG,
      icon: <ShopOutlined />,
      label: 'Kho hàng',
    },
  ]

  return (
    <SidebarSurface>
      <SidebarHeader $collapsed={collapsed}>
        {!collapsed && (
          <SidebarBrand>
            <SidebarTitle>
              <SidebarTitleMain>Quản trị</SidebarTitleMain>
              <SidebarTitleSub>Spa Trang Xinh</SidebarTitleSub>
            </SidebarTitle>
          </SidebarBrand>
        )}
        <SidebarToggle
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </SidebarToggle>
      </SidebarHeader>

      <SidebarNav>
        <Menu
          mode="inline"
          inlineCollapsed={collapsed}
          selectedKeys={[location.pathname]}
          items={items}
          onClick={({ key }) => navigate({ to: String(key) })}
          style={{ borderRight: 0, backgroundColor: 'transparent' }}
        />
      </SidebarNav>

      <SidebarFooter $collapsed={collapsed}>
        {collapsed ? 'STX' : 'Không gian quản trị'}
      </SidebarFooter>
    </SidebarSurface>
  )
}
