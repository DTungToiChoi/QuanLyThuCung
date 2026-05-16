import {
  AppstoreOutlined,
  CalendarOutlined,
  CreditCardOutlined,
  HeartOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { Menu } from 'antd'
import {
  DANH_GIA_KHACH_HANG,
  DAT_LICH_KHACH_HANG,
  HO_SO_THU_CUNG_KHACH_HANG,
  LICHSU_KHACH_HANG,
  TICH_DIEUM_KHACH_HANG,
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

export default function UserMenuSideBar({ collapsed, setCollapsed }: Props) {
  const location = useLocation()
  const navigate = useNavigate()

  const items = [
    {
      key: HO_SO_THU_CUNG_KHACH_HANG,
      icon: <HeartOutlined />,
      label: 'Hồ sơ thú cưng',
    },
    {
      key: DAT_LICH_KHACH_HANG,
      icon: <CalendarOutlined />,
      label: 'Đặt lịch',
    },
    {
      key: LICHSU_KHACH_HANG,
      icon: <CreditCardOutlined />,
      label: 'Lịch sử & hóa đơn',
    },
    {
      key: TICH_DIEUM_KHACH_HANG,
      icon: <StarOutlined />,
      label: 'Tích điểm',
    },
    {
      key: DANH_GIA_KHACH_HANG,
      icon: <MessageOutlined />,
      label: 'Đánh giá',
    },
  ]

  return (
    <SidebarSurface>
      <SidebarHeader $collapsed={collapsed}>
        {!collapsed && (
          <SidebarBrand>
            <SidebarTitle>
              <SidebarTitleMain>Khách hàng</SidebarTitleMain>
              <SidebarTitleSub>Spa Trang Xinh</SidebarTitleSub>
            </SidebarTitle>
          </SidebarBrand>
        )}
        <SidebarToggle
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Mở rộng menu' : 'Thu gọn menu'}
        >
          {collapsed ? <AppstoreOutlined /> : <AppstoreOutlined />}
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
        {collapsed ? 'STX' : 'Khách thân thiết'}
      </SidebarFooter>
    </SidebarSurface>
  )
}
