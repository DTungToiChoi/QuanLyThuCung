import MainLayout from '../../component/MainLayout'
import {
  CalendarOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  HeartOutlined,
  RightOutlined,
} from '@ant-design/icons'

import {
  Button,
  Container,
  Eyebrow,
  Lead,
  Page,
  PageTitle,
  Section,
  SectionTitle,
} from '../../component/page-styled'

import { HomeGlobalStyle, token } from '../../styles/theme'
import * as S from './styled' // 👈 tách styled ra file riêng

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

const steps = [
  { label: 'Bước 1', title: 'Chọn dịch vụ', icon: <CheckCircleOutlined /> },
  { label: 'Bước 2', title: 'Thông tin thú cưng', icon: <HeartOutlined /> },
  { label: 'Bước 3', title: 'Chọn thời gian', icon: <CalendarOutlined /> },
  { label: 'Bước 4', title: 'Xác nhận', icon: <RightOutlined /> },
]

const features = [
  {
    icon: <CheckCircleOutlined />,
    title: 'Chuyên nghiệp',
    desc: 'Groomer có kinh nghiệm và quy trình rõ ràng.',
  },
  {
    icon: <HeartOutlined />,
    title: 'An toàn',
    desc: 'Sản phẩm phù hợp da nhạy cảm.',
  },
  {
    icon: <CustomerServiceOutlined />,
    title: 'Hỗ trợ nhanh',
    desc: 'Tư vấn trước và sau khi hoàn tất dịch vụ.',
  },
]

export default function DatLichPage() {
  return (
    <MainLayout>
      <HomeGlobalStyle />

      <Page>
        <S.Shell>
          <S.Header>
            <Container>
              <Eyebrow>Đặt lịch nhanh</Eyebrow>
              <PageTitle>Chọn dịch vụ và thời gian phù hợp</PageTitle>
              <Lead>
                Gửi thông tin trước để đội ngũ chuẩn bị đúng dịch vụ, sản phẩm và thời lượng chăm sóc cho thú cưng của bạn.
              </Lead>
            </Container>
          </S.Header>

          <Section $bg={token.surfaceContainerLow}>
            <Container>
              <S.BookingGrid>

                {/* LEFT */}
                <S.SidePanel>
                  <S.StepList>
                    {steps.map((step, index) => (
                      <S.Step key={step.label} $active={index === 0}>
                        {step.icon}
                        <div>
                          <S.StepLabel>{step.label}</S.StepLabel>
                          <S.StepTitle>{step.title}</S.StepTitle>
                        </div>
                      </S.Step>
                    ))}
                  </S.StepList>

                  <S.Summary>
                    <S.CardTitle style={{ fontSize: 22 }}>Tóm tắt</S.CardTitle>

                    <S.SummaryRow>
                      Dịch vụ <strong>Cắt tỉa toàn diện</strong>
                    </S.SummaryRow>

                    <S.SummaryRow>
                      Thú cưng <strong>Chưa nhập</strong>
                    </S.SummaryRow>

                    <S.Total>
                      Tổng cộng <strong>450.000đ</strong>
                    </S.Total>
                  </S.Summary>
                </S.SidePanel>

                {/* RIGHT */}
                <S.MainColumn>

                  {/* SERVICES */}
                  <S.FormCard>
                    <SectionTitle>Danh sách gói dịch vụ</SectionTitle>

                    <S.ServiceGrid>
                      {services.map((s) => (
                        <S.ServiceCard key={s.title} $selected={s.selected}>
                          <S.ServiceImage src={s.img} alt={s.title} />

                          <S.Body>
                            <S.Row>
                              <S.CardTitle>{s.title}</S.CardTitle>
                              <S.Price>{s.price}</S.Price>
                            </S.Row>

                            <S.Text>{s.desc}</S.Text>

                            <Button $variant={s.selected ? undefined : 'outline'}>
                              {s.selected ? 'Đã chọn' : 'Chọn dịch vụ'}
                            </Button>
                          </S.Body>
                        </S.ServiceCard>
                      ))}
                    </S.ServiceGrid>
                  </S.FormCard>

                  {/* FORM */}
                  <S.FormCard>
                    <SectionTitle>Thông tin đặt lịch</SectionTitle>

                    <S.FormGrid>
                      <S.Field>Họ tên <input placeholder="Nguyễn Văn A" /></S.Field>
                      <S.Field>Số điện thoại <input placeholder="090xxxxxxx" /></S.Field>
                      <S.Field>Tên thú cưng <input placeholder="Milo" /></S.Field>

                      <S.Field>
                        Loại thú cưng
                        <select defaultValue="">
                          <option value="" disabled>Chọn loại</option>
                          <option>Chó</option>
                          <option>Mèo</option>
                        </select>
                      </S.Field>

                      <S.Field>Ngày hẹn <input type="date" /></S.Field>
                      <S.Field>Giờ hẹn <input type="time" /></S.Field>
                    </S.FormGrid>

                    <S.Field style={{ marginTop: 16 }}>
                      Ghi chú
                      <textarea placeholder="Tình trạng lông, da, tính cách..." />
                    </S.Field>

                    <div style={{ marginTop: 20 }}>
                      <Button>Xác nhận đặt lịch</Button>
                    </div>
                  </S.FormCard>

                  {/* FEATURES */}
                  <S.FeatureGrid>
                    {features.map((f) => (
                      <S.Feature key={f.title}>
                        {f.icon}
                        <div>
                          <S.CardTitle style={{ fontSize: 22 }}>{f.title}</S.CardTitle>
                          <S.Text style={{ marginBottom: 0 }}>{f.desc}</S.Text>
                        </div>
                      </S.Feature>
                    ))}
                  </S.FeatureGrid>

                </S.MainColumn>
              </S.BookingGrid>
            </Container>
          </Section>
        </S.Shell>
      </Page>
    </MainLayout>
  )
}