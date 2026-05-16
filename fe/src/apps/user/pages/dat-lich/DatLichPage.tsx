import {
  Button,
  Card,
  DatePicker,
  Form,
  Select,
  Space,
  Typography,
} from 'antd'
import PageLayout from '../../component/PageLayout'
import { PageContainer } from '../../component/PageContainer'
import { PageSurface } from '../shared/styled'

const { Title } = Typography

const services = [
  {
    value: 'grooming',
    label: 'Chăm sóc lông',
  },
  {
    value: 'spa',
    label: 'Spa toàn diện',
  },
  {
    value: 'combo',
    label: 'Combo cắt tỉa + tắm',
  },
]

const employees = [
  {
    value: 'nv1',
    label: 'Nhân viên Lan',
  },
  {
    value: 'nv2',
    label: 'Nhân viên Hùng',
  },
  {
    value: 'nv3',
    label: 'Nhân viên Mai',
  },
]

export default function DatLichPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Khách hàng' },
          { title: 'Đặt lịch' },
        ]}
      >
        <PageSurface>
          <Title level={2}>
            Đặt lịch dịch vụ
          </Title>

          <Card style={{ maxWidth: 760 }}>
            <Form layout="vertical">
              <Form.Item
                label="Chọn thú cưng"
                name="pet"
              >
                <Select
                  placeholder="Chọn thú cưng"
                  options={[
                    {
                      value: 'bong',
                      label: 'Bông',
                    },
                    {
                      value: 'miu',
                      label: 'Miu',
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Chọn dịch vụ / combo"
                name="service"
              >
                <Select
                  options={services}
                  placeholder="Chọn dịch vụ"
                />
              </Form.Item>

              <Form.Item
                label="Chọn ngày"
                name="date"
              >
                <DatePicker
                  style={{ width: '100%' }}
                />
              </Form.Item>

              <Form.Item
                label="Chọn giờ"
                name="time"
              >
                <Select
                  placeholder="Chọn khung giờ"
                  options={[
                    {
                      value: '09:00',
                      label: '09:00',
                    },
                    {
                      value: '11:00',
                      label: '11:00',
                    },
                    {
                      value: '14:00',
                      label: '14:00',
                    },
                    {
                      value: '16:00',
                      label: '16:00',
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label="Chọn nhân viên yêu thích"
                name="employee"
              >
                <Select
                  options={employees}
                  placeholder="Tùy chọn"
                  allowClear
                />
              </Form.Item>

              <Form.Item>
                <Space>
                  <Button type="primary">
                    Xác nhận đặt lịch
                  </Button>

                  <Button>
                    Hủy
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}