import {
  Badge,
  Button,
  Card,
  Progress,
  Row,
  Col,
  Typography,
} from 'antd'
import PageLayout from '../../component/PageLayout'
import { PageContainer } from '../../component/PageContainer'
import { PageSurface } from '../shared/styled'

const { Title, Paragraph, Text } = Typography

export default function TichDiemPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Khách hàng' },
          { title: 'Tích điểm' },
        ]}
      >
        <PageSurface>
          <Title level={2}>Điểm tích lũy</Title>

          <Row gutter={[20, 20]}>
            <Col xs={24} md={16}>
              <Card>
                <Title level={4}>
                  Tổng điểm hiện tại
                </Title>

                <Text
                  style={{
                    fontSize: 40,
                    fontWeight: 700,
                    display: 'block',
                    margin: '24px 0',
                  }}
                >
                  1.250 điểm
                </Text>

                <Paragraph>
                  Bạn đã đạt hạng Bạc. Hãy tiếp tục tích lũy
                  để nâng hạng và nhận ưu đãi.
                </Paragraph>

                <Progress
                  percent={62}
                  status="active"
                />
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card title="Ưu đãi sắp tới">
                <Badge
                  status="success"
                  text="Giảm 10% cho lần đặt tiếp theo"
                />

                <div style={{ marginTop: 16 }}>
                  <Button type="primary" block>
                    Xem chi tiết ưu đãi
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}