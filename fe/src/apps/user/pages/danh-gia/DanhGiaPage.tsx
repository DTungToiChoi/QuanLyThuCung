import { Button, Card, Rate, Space, Typography } from 'antd'
import { PageContainer } from '../../component/PageContainer'
import { PageSurface } from '../shared/styled'
import PageLayout from '../../component/PageLayout'

const { Title, Paragraph } = Typography

export default function DanhGiaPage() {
  return (
    <PageLayout>
    <PageContainer
      breadcrumbItems={[
        { title: 'Khách hàng' },
        { title: 'Đánh giá' },
      ]}
    >
      <PageSurface>
        <Title level={2}>Đánh giá dịch vụ</Title>

        <Card style={{ maxWidth: 720 }}>
          <Paragraph>
            Hãy cho chúng tôi biết trải nghiệm của bạn để nâng cao
            chất lượng dịch vụ.
          </Paragraph>

          <Space
            direction="vertical"
            style={{ width: '100%' }}
            size="large"
          >
            <Space
              align="center"
              style={{
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>Chất lượng dịch vụ</span>
              <Rate defaultValue={4} />
            </Space>

            <Space
              align="center"
              style={{
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>Phục vụ nhân viên</span>
              <Rate defaultValue={5} />
            </Space>

            <Space
              align="center"
              style={{
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <span>Giá cả</span>
              <Rate defaultValue={4} />
            </Space>

            <Button type="primary">
              Gửi đánh giá
            </Button>
          </Space>
        </Card>
      </PageSurface>
    </PageContainer>
    </PageLayout>
  )
}