import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { QUAN_LY_NHAN_VIEN } from '../../../admin/constants'
import { authApi, type LoginPayload } from '../../../../shared/api'
import { NHAN_VIEN_HOME } from '../../../../shared/constants'
import { tokenManager } from '../../../../shared/tokenManager'

const { Title, Text } = Typography

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f2f0 0%, #e2e2e2 100%);
  padding: 20px;
`

const Container = styled.div`
  width: 100%;
  max-width: 460px;
`

const StyledCard = styled(Card)`
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border: none;
  overflow: hidden;

  .ant-card-body {
    padding: 48px 40px;
  }
`

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
    font-size: 32px !important;
  }

  .brand-sub {
    letter-spacing: 6px;
    color: #4a4a4a;
    font-weight: 600;
    font-size: 20px !important;
    margin-bottom: 12px !important;
  }
`

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
`

const StyledInput = styled(Input)`
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
`

const StyledPassword = styled(Input.Password)`
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
`

export default function Login() {
  const navigate = useNavigate()

  const loginMutation = useMutation({
    mutationFn: (values: LoginPayload) => authApi.login(values),
    onSuccess: async (response) => {
      if (!response.success || !response.data?.accessToken) {
        message.error(response.message || 'Đăng nhập thất bại')
        return
      }

      tokenManager.setTokens(response.data)

      if (response.data.roles.includes('ADMIN')) {
        await navigate({ to: QUAN_LY_NHAN_VIEN })
        return
      }

      if (response.data.roles.includes('NHANVIEN')) {
        await navigate({ to: NHAN_VIEN_HOME })
        return
      }

      message.error('Tài khoản chưa được phân quyền phù hợp')
    },
    onError: () => {
      message.error('Tên đăng nhập hoặc mật khẩu không đúng')
    },
  })

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

          <Form<LoginPayload>
            layout="vertical"
            onFinish={(values) => loginMutation.mutate(values)}
            requiredMark={false}
          >
            <Form.Item
              name="username"
              label={<Text strong style={{ fontSize: 16 }}>Tên đăng nhập</Text>}
              rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
            >
              <StyledInput
                prefix={<UserOutlined style={{ color: '#6b7e46' }} />}
                placeholder="nv02"
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
              <StyledButton type="primary" htmlType="submit" loading={loginMutation.isPending} block>
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
  )
}
