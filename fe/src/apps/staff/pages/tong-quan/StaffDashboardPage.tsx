import { Button } from 'antd'
import { PageContainer, PageLayout } from '../../component'
import {
  CardGrid,
  Description,
  Hero,
  Section,
  SectionTitle,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
  PageSurface,
  Title,
} from '../shared/styled'

export default function StaffDashboardPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Nhân viên' },
          { title: 'Tổng quan' },
        ]}
      >
        <PageSurface>
          <Hero>
            <div>
              <Title>Tổng quan nhân viên</Title>
              <Description>
                Giao diện cho lễ tân và kỹ thuật viên tập trung vào tác vụ hàng ngày,
                quản lý lịch hẹn, check-in và tiến độ dịch vụ.
              </Description>
            </div>
            <Button type="primary">Tạo lịch mới</Button>
          </Hero>

          <StatGrid>
            <StatCard>
              <StatValue>24</StatValue>
              <StatLabel>Cuộc hẹn hôm nay</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>8</StatValue>
              <StatLabel>Đang xử lý</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>12</StatValue>
              <StatLabel>Hồ sơ thú cưng</StatLabel>
            </StatCard>
          </StatGrid>

          <CardGrid>
            <Section>
              <SectionTitle>Tiếp nhận lịch</SectionTitle>
              <p>
                Nhận yêu cầu đổi lịch, xác nhận ca, check-in khách và cập nhật trạng thái dịch vụ
                ngay trong một bảng điều khiển đơn giản.
              </p>
            </Section>

            <Section>
              <SectionTitle>Thanh toán nhanh</SectionTitle>
              <p>
                Tính tiền, áp mã giảm giá và phát hành hóa đơn cho khách ngay sau khi hoàn thành dịch vụ.
              </p>
            </Section>
          </CardGrid>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}
