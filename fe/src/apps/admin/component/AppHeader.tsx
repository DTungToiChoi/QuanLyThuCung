import { Avatar, Dropdown, Space } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  // AppstoreOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Left, Right, StyledHeader, GovEmblem, SystemTitle } from './styled';
import logo from '../../../assets/logo-removebg-preview.png';
// import AppLauncher from './AppLauncher';
import { useNavigate } from '@tanstack/react-router';
import { TRANG_CHU } from '@/apps/home/constants';

export default function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate({ to: TRANG_CHU, replace: true });
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
        <GovEmblem src={logo} alt="Spa Trang Xinh logo" />
        <SystemTitle>Spa Trang Xinh</SystemTitle>
      </Left>

      <Right size={24}>
          <HomeOutlined style={{ fontSize: '20px' }} />
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
            <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#dce5d4', color: '#6b7e46' }} />
            {/* <span style={{ color: '#fff', fontWeight: 600 }}>Tuan</span> */}
          </Space>
        </Dropdown>
      </Right>
    </StyledHeader>
  );
}
