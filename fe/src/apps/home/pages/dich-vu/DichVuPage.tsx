import styled from 'styled-components'
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  ScissorOutlined,
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
  SectionTitle,
} from '../../component/page-styled'
import { HomeGlobalStyle, token } from '../../styles/theme'

const Hero = styled.section`
  min-height: 420px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(252, 249, 248, 0.96), rgba(252, 249, 248, 0.62), rgba(252, 249, 248, 0.18)),
    url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80') center/cover;
`

const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`

const Grid = styled.div`
  display: grid;
  gap: 22px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const ServiceImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

const ServiceBody = styled.div`
  padding: 22px;
`

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`

const Tag = styled.span`
  border-radius: 999px;
  padding: 5px 10px;
  background: ${token.primaryFixed};
  color: ${token.onPrimaryFixed};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`

const ServiceTitle = styled.h3`
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

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${token.outline};
  font-size: 14px;
`

const Price = styled.strong`
  color: ${token.primary};
  font-size: 20px;
`

const services = [
  {
    title: 'Combo tắm gội thảo mộc',
    tag: 'Tắm & sấy',
    desc: 'Tắm 2 lần, vệ sinh tai, vắt tuyến hôi, sấy khô, chải tơi lông và xịt nước hoa cao cấp.',
    time: '60 - 90 phút',
    price: 'Từ 250.000đ',
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cắt tỉa tạo kiểu toàn thân',
    tag: 'Thẩm mỹ',
    desc: 'Cắt tỉa theo yêu cầu, tạo kiểu mặt, chân, mông và vệ sinh tai móng kỹ càng.',
    time: '120 - 180 phút',
    price: 'Từ 450.000đ',
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Khách sạn thú cưng',
    tag: 'Lưu trú',
    desc: 'Phòng riêng sạch sẽ, camera theo dõi, điều hòa và chế độ ăn theo yêu cầu của từng bé.',
    time: 'Theo ngày',
    price: 'Từ 200.000đ/ngày',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Combo tắm gội thảo mộc',
    tag: 'Tắm & sấy',
    desc: 'Tắm 2 lần, vệ sinh tai, vắt tuyến hôi, sấy khô, chải tơi lông và xịt nước hoa cao cấp.',
    time: '60 - 90 phút',
    price: 'Từ 250.000đ',
    img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cắt tỉa tạo kiểu toàn thân',
    tag: 'Thẩm mỹ',
    desc: 'Cắt tỉa theo yêu cầu, tạo kiểu mặt, chân, mông và vệ sinh tai móng kỹ càng.',
    time: '120 - 180 phút',
    price: 'Từ 450.000đ',
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Khách sạn thú cưng',
    tag: 'Lưu trú',
    desc: 'Phòng riêng sạch sẽ, camera theo dõi, điều hòa và chế độ ăn theo yêu cầu của từng bé.',
    time: 'Theo ngày',
    price: 'Từ 200.000đ/ngày',
    img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
]

export default function DichVuPage() {
  return (
    <MainLayout>
      <HomeGlobalStyle />
      <Page>
        <Hero>
          <Container>
            <Eyebrow>Premium pet care</Eyebrow>
            <PageTitle>Dịch vụ chăm sóc thú cưng</PageTitle>
            <Lead>
              Quy trình chăm sóc chuyên nghiệp, sản phẩm an toàn và đội ngũ yêu thú cưng giúp mỗi bé luôn sạch khỏe,
              thư giãn và tự tin.
            </Lead>
            <HeroActions>
              <Button>Đặt lịch ngay</Button>
            </HeroActions>
          </Container>
        </Hero>

        <Section>
          <Container>
            <SectionTitle>Danh sách dịch vụ</SectionTitle>
            <Grid>
              {services.map((service) => (
                <Card key={service.title}>
                  <ServiceImage src={service.img} alt={service.title} />
                  <ServiceBody>
                    <Row>
                      <ServiceTitle>{service.title}</ServiceTitle>
                      <Tag>{service.tag}</Tag>
                    </Row>
                    <Text>{service.desc}</Text>
                    <Meta>
                      <ClockCircleOutlined />
                      {service.time}
                    </Meta>
                    <Row style={{ marginTop: 18, alignItems: 'center' }}>
                      <Price>{service.price}</Price>
                      <Button>Đặt lịch</Button>
                    </Row>
                  </ServiceBody>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section>
          <Container>
            <Grid>
              {[
                { icon: <SkinOutlined />, title: 'Sản phẩm an toàn', text: 'Ưu tiên sản phẩm dịu nhẹ, phù hợp da nhạy cảm.' },
                { icon: <ScissorOutlined />, title: 'Tạo kiểu theo bé', text: 'Tư vấn kiểu lông dựa trên giống, thói quen và mùa.' },
                { icon: <CheckCircleOutlined />, title: 'Theo dõi rõ ràng', text: 'Ghi nhận tình trạng trước và sau khi hoàn tất dịch vụ.' },
              ].map((item) => (
                <Card key={item.title}>
                  <ServiceBody>
                    <Meta style={{ color: token.primary, fontSize: 26 }}>{item.icon}</Meta>
                    <ServiceTitle style={{ marginTop: 14 }}>{item.title}</ServiceTitle>
                    <Text>{item.text}</Text>
                  </ServiceBody>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>
      </Page>
    </MainLayout>
  )
}
