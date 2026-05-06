import { Avatar, Dropdown, Space } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  // AppstoreOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Left, Right, StyledHeader, GovEmblem, SystemTitle } from './styled';
import { Link } from '@tanstack/react-router';
import { ADMIN_ROUTE } from '@/apps/admin/constants';
// import AppLauncher from './AppLauncher';
import { useNavigate } from '@tanstack/react-router';

export default function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate({ to: "/", replace: true });
  };

  const items = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: 'logout',
      label: 'Logout',
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <StyledHeader>
      <Left>
        <GovEmblem />
        <SystemTitle>APP_MARKET</SystemTitle>
      </Left>

      <Right size={24}>
        <Link to={ADMIN_ROUTE}>
          <HomeOutlined style={{ fontSize: '20px' }} />
        </Link>
{/* 
        <Popover
          content={<AppLauncher />}
          trigger="click"
          placement="bottomRight"
        >
          <AppstoreOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Popover> */}

        <BellOutlined style={{ fontSize: '20px' }} />

        <Dropdown menu={{ items }}>
          <Space style={{ cursor: 'pointer', marginLeft: '12px' }}>
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
            {/* <span style={{ color: '#fff', fontWeight: 600 }}>Tuan</span> */}
          </Space>
        </Dropdown>
      </Right>
    </StyledHeader>
  );
}