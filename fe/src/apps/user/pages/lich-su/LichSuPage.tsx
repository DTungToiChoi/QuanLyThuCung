import {
  Badge,
  Card,
  List,
  Typography,
} from 'antd'
import PageLayout from '../../component/PageLayout'
import { PageContainer } from '../../component/PageContainer'
import { PageSurface } from '../shared/styled'

const { Title, Text } = Typography

const history = [
  {
    title: 'Gói Spa toàn diện cho Bông',
    date: '05/05/2026',
    status: 'Hoàn thành',
    total: '450.000đ',
  },
  {
    title: 'Tắm dưỡng + cắt tỉa cho Miu',
    date: '21/04/2026',
    status: 'Hoàn thành',
    total: '320.000đ',
  },
]

export default function LichSuPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Khách hàng' },
          { title: 'Lịch sử & hóa đơn' },
        ]}
      >
        <PageSurface>
          <Title level={2}>
            Lịch sử & hóa đơn
          </Title>

          <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={history}
            renderItem={(item) => (
              <List.Item>
                <Card>
                  <Card.Meta
                    title={item.title}
                    description={
                      <div>
                        <Text>
                          Ngày: {item.date}
                        </Text>

                        <br />

                        <Text>
                          Tổng tiền: {item.total}
                        </Text>

                        <br />

                        <Text>
                          Trạng thái:{' '}
                          <Badge
                            status={
                              item.status === 'Hoàn thành'
                                ? 'success'
                                : 'processing'
                            }
                            text={item.status}
                          />
                        </Text>
                      </div>
                    }
                  />
                </Card>
              </List.Item>
            )}
          />
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}