import styled from 'styled-components'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CommentOutlined,
  PhoneOutlined,
  SearchOutlined,
  SkinOutlined,
} from '@ant-design/icons'
import MainLayout from '../../component/MainLayout'
import {
  Button,
  Card,
  Container,
  Eyebrow,
  Lead,
  Page,
  PageTitle,
  Section,
} from '../../component/page-styled'
import { HomeGlobalStyle, token } from '../../styles/theme'

const Hero = styled(Section)`
  padding-top: 76px;
  padding-bottom: 38px;
`

const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 980px) {
    grid-template-columns: 360px minmax(0, 1fr);
    align-items: start;
  }
`

const SearchCard = styled(Card)`
  padding: 24px;
  position: sticky;
  top: 106px;
`

const CardTitle = styled.h2`
  margin: 0 0 18px;
  color: ${token.primary};
  font-family: 'DM Serif Display', serif;
  font-size: 28px;
  font-weight: 400;
`

const Field = styled.label`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
  color: ${token.onSurface};
  font-weight: 700;

  input {
    border: 1px solid ${token.outlineVariant};
    border-radius: 8px;
    padding: 12px 14px;
    background: ${token.surfaceContainerLow};
    font: inherit;
    outline: none;
  }

  input:focus {
    border-color: ${token.primary};
    box-shadow: 0 0 0 3px rgba(107, 126, 70, 0.14);
  }
`

const Notice = styled.div`
  margin-top: 20px;
  border: 1px solid ${token.secondaryFixedDim};
  border-radius: 8px;
  padding: 14px;
  background: ${token.secondaryFixed};
  color: ${token.onSecondaryFixedVariant};
  line-height: 1.55;
`

const ResultCard = styled(Card)`
  overflow: hidden;
`

const ResultHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 24px;
  border-bottom: 1px solid ${token.outlineVariant};
  background: ${token.surfaceBright};
`

const Pet = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const Avatar = styled.img`
  width: 82px;
  height: 82px;
  border: 4px solid ${token.primaryFixed};
  border-radius: 50%;
  object-fit: cover;
`

const PetName = styled.h2`
  margin: 0;
  color: ${token.onSurface};
  font-family: 'DM Serif Display', serif;
  font-size: 30px;
  font-weight: 400;
`

const Muted = styled.p`
  margin: 4px 0 0;
  color: ${token.onSurfaceVariant};
`

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  padding: 10px 16px;
  background: ${token.primary};
  color: ${token.onPrimary};
  font-weight: 800;
`

const Dot = styled.span`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: ${token.onPrimary};
`

const Timeline = styled.div`
  position: relative;
  padding: 28px 24px;

  &::before {
    content: '';
    position: absolute;
    left: 48px;
    top: 32px;
    bottom: 32px;
    width: 2px;
    background: ${token.outlineVariant};
  }
`

const Step = styled.div<{ $active?: boolean; $done?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  gap: 18px;
  margin-bottom: 26px;
  opacity: ${({ $active, $done }) => ($active || $done ? 1 : 0.48)};
`

const StepIcon = styled.div<{ $active?: boolean; $done?: boolean }>`
  z-index: 1;
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${({ $active, $done }) => ($active || $done ? token.primary : token.surfaceContainerHigh)};
  color: ${({ $active, $done }) => ($active || $done ? token.onPrimary : token.outline)};
`

const StepBody = styled.div<{ $active?: boolean }>`
  padding: ${({ $active }) => ($active ? '18px' : '8px 0')};
  border: ${({ $active }) => ($active ? `1px solid ${token.primary}` : 'none')};
  border-radius: 8px;
  background: ${({ $active }) => ($active ? token.surfaceContainerLow : 'transparent')};
`

const StepTitle = styled.h3`
  margin: 0;
  color: ${token.onSurface};
  font-size: 18px;
`

const Image = styled.img`
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 14px;
`

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  align-items: center;
  justify-content: space-between;
  padding: 22px 24px;
  border-top: 1px solid ${token.outlineVariant};
  background: ${token.surfaceContainerLowest};
  color: ${token.onSurfaceVariant};
`

export default function TraCuuPage() {
  return (
    <MainLayout>
      <HomeGlobalStyle />
      <Page>
        <Hero>
          <Container>
            <Eyebrow>Tra cứu lịch hẹn</Eyebrow>
            <PageTitle>Theo dõi tiến độ chăm sóc</PageTitle>
            <Lead>Nhập mã lịch hẹn hoặc số điện thoại để xem trạng thái dịch vụ của thú cưng tại Spa Trang Xinh.</Lead>
          </Container>
        </Hero>

        <Section $bg={token.surfaceContainerLow}>
          <Container>
            <Grid>
              <SearchCard>
                <CardTitle>
                  <SearchOutlined /> Thông tin tra cứu
                </CardTitle>
                <Field>
                  Mã lịch hẹn
                  <input placeholder="Ví dụ: BK-12345" />
                </Field>
                <Field>
                  Số điện thoại
                  <input placeholder="090xxxxxxx" />
                </Field>
                <Button style={{ width: '100%' }}>Kiểm tra ngay</Button>
                <Notice>Mã lịch hẹn được gửi trong tin nhắn hoặc email xác nhận sau khi đặt lịch.</Notice>
              </SearchCard>

              <ResultCard>
                <ResultHeader>
                  <Pet>
                    <Avatar
                      src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=300&q=80"
                      alt="Luna"
                    />
                    <div>
                      <PetName>Luna</PetName>
                      <Muted>
                        Giống: <strong>Golden Retriever</strong>
                      </Muted>
                    </div>
                  </Pet>
                  <div>
                    <Muted>Trạng thái hiện tại</Muted>
                    <Status>
                      <Dot />
                      Đang thực hiện
                    </Status>
                  </div>
                </ResultHeader>

                <Timeline>
                  {[
                    { title: 'Đã tiếp nhận', text: 'Nhân viên đã nhận Luna tại quầy lúc 09:00.', icon: <CheckCircleOutlined />, done: true },
                    {
                      title: 'Đang tắm',
                      text: 'Sử dụng dầu gội thảo mộc phù hợp cho lông vàng.',
                      icon: <SkinOutlined />,
                      active: true,
                    },
                    { title: 'Cắt tỉa', text: 'Tạo kiểu theo yêu cầu của chủ nuôi.', icon: <ClockCircleOutlined /> },
                    { title: 'Sẵn sàng đón', text: 'Hoàn tất quy trình và chờ bạn tới đón.', icon: <CheckCircleOutlined /> },
                  ].map((step) => (
                    <Step key={step.title} $active={step.active} $done={step.done}>
                      <StepIcon $active={step.active} $done={step.done}>
                        {step.icon}
                      </StepIcon>
                      <StepBody $active={step.active}>
                        <StepTitle>{step.title}</StepTitle>
                        <Muted>{step.text}</Muted>
                        {step.active && (
                          <>
                            <Image
                              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1100&q=80"
                              alt="Tiến độ chăm sóc"
                            />
                            <Notice style={{ background: token.surfaceContainerLowest }}>
                              <CommentOutlined /> Luna rất ngoan, đang được sấy lông sau khi tắm sạch.
                            </Notice>
                          </>
                        )}
                      </StepBody>
                    </Step>
                  ))}
                </Timeline>

                <Footer>
                  <span>
                    <ClockCircleOutlined /> Dự kiến hoàn thành: <strong>11:30 AM</strong>
                  </span>
                  <Button $variant="outline">
                    <PhoneOutlined /> Liên hệ nhân viên
                  </Button>
                </Footer>
              </ResultCard>
            </Grid>
          </Container>
        </Section>
      </Page>
    </MainLayout>
  )
}
