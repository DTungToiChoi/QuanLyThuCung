import { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f2f0 0%, #e2e2e2 100%);
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 460px;
`;

const StyledCard = styled(Card)`
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: none;
  overflow: hidden;

  .ant-card-body {
    padding: 48px 40px;
  }
`;

const LogoSection = styled.div`
  text-align: center;
  margin-bottom: 32px;

  img {
    width: 130px;
    height: auto;
    margin-bottom: 20px;
  }

  .brand-main {
    color: #6b7e46;
    letter-spacing: 3px;
    margin-bottom: 4px !important;
    font-weight: 900;
    font-size: 32px !important; /* Tăng kích thước chữ */
  }

  .brand-sub {
    letter-spacing: 6px;
    color: #4a4a4a;
    font-weight: 600;
    font-size: 20px !important; /* Tăng kích thước chữ */
    margin-bottom: 12px !important;
  }
`;

const StyledButton = styled(Button)`
  height: 54px;
  font-size: 18px;
  font-weight: 700;
  background-color: #6b7e46;
  border-color: #6b7e46;
  border-radius: 12px;
  margin-top: 16px;

  &:hover, &:focus {
    background-color: #556638 !important;
    border-color: #556638 !important;
  }
`;

const StyledInput = styled(Input)`
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
`;

const StyledPassword = styled(Input.Password)`
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
`;

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Wrapper>
      <Container>
        <StyledCard>
          <LogoSection>
            <img src="/src/assets/logo-removebg-preview.png" alt="Spa Thú Cưng Trang Xinh" />
            <Title level={1} className="brand-main">SPA THÚ CƯNG</Title>
            <Title level={3} className="brand-sub">TRANG XINH</Title>
            <Text type="secondary" style={{ fontSize: 16 }}>
              Hệ thống chăm sóc thú cưng chuyên nghiệp
            </Text>
          </LogoSection>

          <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
            <Form.Item
              name="email"
              label={<Text strong style={{ fontSize: 16 }}>Email quản trị</Text>}
              rules={[
                { required: true, message: 'Vui lòng nhập email!' },
                { type: 'email', message: 'Email không hợp lệ!' }
              ]}
            >
              <StyledInput 
                prefix={<UserOutlined style={{ color: '#6b7e46' }} />} 
                placeholder="admin@trangxinh.vn" 
              />
            </Form.Item>

            <Form.Item
              name="password"
              label={<Text strong style={{ fontSize: 16 }}>Mật khẩu</Text>}
              rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
              <StyledPassword 
                prefix={<LockOutlined style={{ color: '#6b7e46' }} />} 
                placeholder="••••••••" 
              />
            </Form.Item>

            <Form.Item>
              <StyledButton type="primary" htmlType="submit" loading={loading} block>
                ĐĂNG NHẬP NGAY
              </StyledButton>
            </Form.Item>
          </Form>
        </StyledCard>
        
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <Text type="secondary" style={{ fontSize: 13, opacity: 0.7 }}>
            © 2026 Spa Thú Cưng Trang Xinh
          </Text>
        </div>
      </Container>
    </Wrapper>
  );
}