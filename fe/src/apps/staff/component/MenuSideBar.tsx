import {
  BarChartOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  HeartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { Menu } from 'antd'
import {
  LICH_HEN_NHAN_VIEN,
  TONG_QUAN_NHAN_VIEN,
  HO_SO_THUC_CUNG,
  THANH_TOAN_NHAN_VIEN,
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
} from './styled.ts'

interface Props {
  collapsed: boolean
  setCollapsed: (val: boolean) => void
}

export default function MenuSideBar({ collapsed, setCollapsed }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  const items = [
    {
      key: TONG_QUAN_NHAN_VIEN,
      icon: <BarChartOutlined />,
      label: 'Tổng quan',
    },
    {
      key: LICH_HEN_NHAN_VIEN,
      icon: <CalendarOutlined />,
      label: 'Lịch hẹn',
    },
    {
      key: HO_SO_THUC_CUNG,
      icon: <HeartOutlined />,
      label: 'Hồ sơ thú cưng',
    },
    {
      key: THANH_TOAN_NHAN_VIEN,
      icon: <CreditCardOutlined />,
      label: 'Thanh toán',
    },
  ]

  return (
    <SidebarSurface>
      <SidebarHeader $collapsed={collapsed}>
        {!collapsed && (
          <SidebarBrand>
            <SidebarTitle>
              <SidebarTitleMain>Nhân viên</SidebarTitleMain>
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
        {collapsed ? 'STX' : 'Nhân viên chăm sóc'}
      </SidebarFooter>
    </SidebarSurface>
  )
}
