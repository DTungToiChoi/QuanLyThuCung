import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Typography,
} from 'antd'
import PageLayout from '../../component/PageLayout'
import { PageContainer } from '../../component/PageContainer'
import { PageSurface } from '../shared/styled'

const { Title, Text } = Typography

const samplePets = [
  {
    name: 'Bông',
    type: 'Corgi',
    age: '2 tuổi',
    weight: '12kg',
    health: 'Tốt',
  },
  {
    name: 'Miu',
    type: 'Mèo Anh',
    age: '3 tuổi',
    weight: '5kg',
    health: 'Ổn định',
  },
]

export default function HoSoThuCungPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Khách hàng' },
          { title: 'Hồ sơ thú cưng' },
        ]}
      >
        <PageSurface>
          <Title level={2}>
            Hồ sơ thú cưng
          </Title>

          <Row gutter={[20, 20]}>
            {samplePets.map((pet) => (
              <Col
                xs={24}
                md={12}
                key={pet.name}
              >
                <Card
                  actions={[
                    <Button
                      type="link"
                      key="edit"
                    >
                      Chỉnh sửa
                    </Button>,

                    <Button
                      type="link"
                      key="history"
                    >
                      Lịch sử sức khỏe
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    avatar={
                      <Avatar size={64}>
                        {pet.name[0]}
                      </Avatar>
                    }
                    title={pet.name}
                    description={
                      <div>
                        <Text>
                          Giống: {pet.type}
                        </Text>

                        <br />

                        <Text>
                          Tuổi: {pet.age}
                        </Text>

                        <br />

                        <Text>
                          Cân nặng: {pet.weight}
                        </Text>

                        <br />

                        <Text>
                          Trạng thái: {pet.health}
                        </Text>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Button
            type="primary"
            style={{ marginTop: 24 }}
          >
            Thêm thú cưng mới
          </Button>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}