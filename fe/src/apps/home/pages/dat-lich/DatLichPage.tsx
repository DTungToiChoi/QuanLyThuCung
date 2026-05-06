import styled from 'styled-components'
import {
  CalendarOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  HeartOutlined,
  RightOutlined,
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
  SectionTitle,
} from '../../component/page-styled'
import { HomeGlobalStyle, token } from '../../styles/theme'

const Shell = styled.div`
  min-height: 100vh;
  background: ${token.background};
`

const Header = styled(Section)`
  padding-top: 76px;
  padding-bottom: 38px;
`

const BookingGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 980px) {
    grid-template-columns: 300px minmax(0, 1fr);
    align-items: start;
  }
`

const SidePanel = styled.aside`
  position: sticky;
  top: 106px;
  display: grid;
  gap: 18px;
`

const StepList = styled(Card)`
  padding: 18px;
`

const Step = styled.div<{ $active?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-left: 4px solid ${({ $active }) => ($active ? token.primary : 'transparent')};
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'rgba(107, 126, 70, 0.1)' : 'transparent')};
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};

  svg {
    color: ${({ $active }) => ($active ? token.primary : token.outline)};
    font-size: 20px;
  }
`

const StepLabel = styled.p`
  margin: 0;
  color: ${token.primary};
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
`

const StepTitle = styled.p`
  margin: 2px 0 0;
  color: ${token.onSurface};
  font-weight: 700;
`

const Summary = styled(Card)`
  padding: 20px;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  color: ${token.onSurfaceVariant};

  strong {
    color: ${token.onSurface};
  }
`

const Total = styled(SummaryRow)`
  margin-top: 8px;
  border-top: 1px solid ${token.outlineVariant};
  color: ${token.onSurface};
  font-weight: 800;

  strong {
    color: ${token.primary};
  }
`

const MainColumn = styled.div`
  display: grid;
  gap: 22px;
`

const ServiceGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const ServiceCard = styled(Card)<{ $selected?: boolean }>`
  border-color: ${({ $selected }) => ($selected ? token.primary : token.outlineVariant)};
  box-shadow: ${({ $selected }) => ($selected ? '0 16px 44px rgba(107, 126, 70, 0.16)' : undefined)};
`

const ServiceImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`

const Body = styled.div`
  padding: 20px;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

const CardTitle = styled.h3`
  margin: 0;
  color: ${token.onSurface};
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  font-weight: 400;
`

const Text = styled.p`
  margin: 12px 0 18px;
  color: ${token.onSurfaceVariant};
  line-height: 1.65;
`

const Price = styled.strong`
  color: ${token.primary};
  white-space: nowrap;
`

const FormCard = styled(Card)`
  padding: 24px;
`

const FormGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const Field = styled.label`
  display: grid;
  gap: 7px;
  color: ${token.onSurface};
  font-weight: 700;

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid ${token.outlineVariant};
    border-radius: 8px;
    padding: 12px 14px;
    background: ${token.surfaceContainerLow};
    color: ${token.onSurface};
    font: inherit;
    outline: none;
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: ${token.primary};
    box-shadow: 0 0 0 3px rgba(107, 126, 70, 0.14);
  }
`

const FeatureGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const Feature = styled(Card)`
  padding: 20px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    color: ${token.primary};
    font-size: 28px;
  }
`

const services = [
  {
    title: 'Combo tắm gội',
    price: '250.000đ',
    desc: 'Tắm 2 lần, vệ sinh tai, vắt tuyến hôi, sấy khô và xịt nước hoa cao cấp.',
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cắt tỉa toàn diện',
    price: '450.000đ',
    desc: 'Tắm gội, cắt tạo kiểu theo yêu cầu, tạo dáng khuôn mặt và vệ sinh kỹ càng.',
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80',
    selected: true,
  },
  {
    title: 'Vệ sinh tai móng',
    price: '120.000đ',
    desc: 'Cắt mài móng, nhổ lông tai và vệ sinh ống tai giúp pet thoải mái hơn.',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=900&q=80',
  },
]

export default function DatLichPage() {
  return (
    <MainLayout>
      <HomeGlobalStyle />
      <Page>
        <Shell>
          <Header>
            <Container>
              <Eyebrow>Đặt lịch nhanh</Eyebrow>
              <PageTitle>Chọn dịch vụ và thời gian phù hợp</PageTitle>
              <Lead>
                Gửi thông tin trước để đội ngũ chuẩn bị đúng dịch vụ, sản phẩm và thời lượng chăm sóc cho thú cưng của
                bạn.
              </Lead>
            </Container>
          </Header>

          <Section $bg={token.surfaceContainerLow}>
            <Container>
              <BookingGrid>
                <SidePanel>
                  <StepList>
                    {[
                      ['Bước 1', 'Chọn dịch vụ', <CheckCircleOutlined />],
                      ['Bước 2', 'Thông tin thú cưng', <HeartOutlined />],
                      ['Bước 3', 'Chọn thời gian', <CalendarOutlined />],
                      ['Bước 4', 'Xác nhận', <RightOutlined />],
                    ].map(([label, title, icon], index) => (
                      <Step key={String(label)} $active={index === 0}>
                        {icon}
                        <div>
                          <StepLabel>{label}</StepLabel>
                          <StepTitle>{title}</StepTitle>
                        </div>
                      </Step>
                    ))}
                  </StepList>

                  <Summary>
                    <CardTitle style={{ fontSize: 22 }}>Tóm tắt</CardTitle>
                    <SummaryRow>
                      Dịch vụ <strong>Cắt tỉa toàn diện</strong>
                    </SummaryRow>
                    <SummaryRow>
                      Thú cưng <strong>Chưa nhập</strong>
                    </SummaryRow>
                    <Total>
                      Tổng cộng <strong>450.000đ</strong>
                    </Total>
                  </Summary>
                </SidePanel>

                <MainColumn>
                  <FormCard>
                    <SectionTitle>Danh sách gói dịch vụ</SectionTitle>
                    <ServiceGrid>
                      {services.map((service) => (
                        <ServiceCard key={service.title} $selected={service.selected}>
                          <ServiceImage src={service.img} alt={service.title} />
                          <Body>
                            <Row>
                              <CardTitle>{service.title}</CardTitle>
                              <Price>{service.price}</Price>
                            </Row>
                            <Text>{service.desc}</Text>
                            <Button $variant={service.selected ? undefined : 'outline'}>
                              {service.selected ? 'Đã chọn' : 'Chọn dịch vụ'}
                            </Button>
                          </Body>
                        </ServiceCard>
                      ))}
                    </ServiceGrid>
                  </FormCard>

                  <FormCard>
                    <SectionTitle>Thông tin đặt lịch</SectionTitle>
                    <FormGrid>
                      <Field>
                        Họ tên
                        <input placeholder="Nguyễn Văn A" />
                      </Field>
                      <Field>
                        Số điện thoại
                        <input placeholder="090xxxxxxx" />
                      </Field>
                      <Field>
                        Tên thú cưng
                        <input placeholder="Milo" />
                      </Field>
                      <Field>
                        Loại thú cưng
                        <select defaultValue="">
                          <option value="" disabled>
                            Chọn loại
                          </option>
                          <option>Chó</option>
                          <option>Mèo</option>
                        </select>
                      </Field>
                      <Field>
                        Ngày hẹn
                        <input type="date" />
                      </Field>
                      <Field>
                        Giờ hẹn
                        <input type="time" />
                      </Field>
                    </FormGrid>
                    <Field style={{ marginTop: 16 }}>
                      Ghi chú
                      <textarea placeholder="Tình trạng lông, da, tính cách hoặc yêu cầu riêng..." />
                    </Field>
                    <div style={{ marginTop: 20 }}>
                      <Button>Xác nhận đặt lịch</Button>
                    </div>
                  </FormCard>

                  <FeatureGrid>
                    {[
                      [<CheckCircleOutlined />, 'Chuyên nghiệp', 'Groomer có kinh nghiệm và quy trình rõ ràng.'],
                      [<HeartOutlined />, 'An toàn', 'Sản phẩm phù hợp da nhạy cảm của thú cưng.'],
                      [<CustomerServiceOutlined />, 'Hỗ trợ nhanh', 'Tư vấn trước và sau khi hoàn tất dịch vụ.'],
                    ].map(([icon, title, text]) => (
                      <Feature key={String(title)}>
                        {icon}
                        <div>
                          <CardTitle style={{ fontSize: 22 }}>{title}</CardTitle>
                          <Text style={{ marginBottom: 0 }}>{text}</Text>
                        </div>
                      </Feature>
                    ))}
                  </FeatureGrid>
                </MainColumn>
              </BookingGrid>
            </Container>
          </Section>
        </Shell>
      </Page>
    </MainLayout>
  )
}
