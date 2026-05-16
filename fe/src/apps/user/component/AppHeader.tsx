import { Avatar, Dropdown, Space } from 'antd'
import { BellOutlined, HomeOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from '@tanstack/react-router'
import { Left, Right, StyledHeader, GovEmblem, SystemTitle } from './styled'
import logo from '@/assets/logo-removebg-preview.png'
import { LOGIN } from '@/apps/auth/constant'
import { HO_SO_THU_CUNG_KHACH_HANG } from '../constants'

export default function AppHeader() {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate({ to: LOGIN, replace: true })
  }

  const menuItems = [
    {
      key: 'profile',
      label: 'Thông tin cá nhân',
      icon: <UserOutlined />,
      onClick: () => navigate({ to: HO_SO_THU_CUNG_KHACH_HANG }),
    },
    {
      key: 'logout',
      label: 'Đăng xuất',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ]

  return (
    <StyledHeader>
      <Left>
        <GovEmblem src={logo} alt="Spa Trang Xinh logo" />
        <SystemTitle>Khách hàng Spa Trang Xinh</SystemTitle>
      </Left>

      <Right size={24}>
        <HomeOutlined
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => navigate({ to: HO_SO_THU_CUNG_KHACH_HANG })}
          title="Trang tổng quan"
        />
        <BellOutlined style={{ fontSize: '20px' }} />
        <Dropdown menu={{ items: menuItems }}>
          <Space style={{ cursor: 'pointer', marginLeft: 12 }}>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#dce5d4', color: '#6b7e46' }} />
          </Space>
        </Dropdown>
      </Right>
    </StyledHeader>
  )
}
