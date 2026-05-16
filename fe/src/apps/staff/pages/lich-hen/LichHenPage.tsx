import { Button, Table, Tag } from 'antd'
import { PageContainer, PageLayout } from '../../component'
import { PageSurface, Section, SectionTitle, Title, Description } from '../shared/styled'

const appointments = [
  {
    key: '1',
    time: '08:30',
    customer: 'Nguyễn Hoàng',
    pet: 'Moka - Chó',
    service: 'Tắm + Cắt tỉa',
    status: 'Chờ xác nhận',
  },
  {
    key: '2',
    time: '10:00',
    customer: 'Trần Minh',
    pet: 'Nala - Mèo',
    service: 'Khách sạn thú cưng',
    status: 'Đã nhận lịch',
  },
  {
    key: '3',
    time: '13:15',
    customer: 'Lê Mai',
    pet: 'Bình - Chó',
    service: 'Gói dưỡng da',
    status: 'Đang xử lý',
  },
]

const columns = [
  {
    title: 'Giờ',
    dataIndex: 'time',
    key: 'time',
    width: 90,
  },
  {
    title: 'Khách hàng',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Thú cưng',
    dataIndex: 'pet',
    key: 'pet',
  },
  {
    title: 'Dịch vụ',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const color =
        status === 'Chờ xác nhận'
          ? 'orange'
          : status === 'Đã nhận lịch'
          ? 'green'
          : status === 'Đang xử lý'
          ? 'blue'
          : 'default'
      return <Tag color={color}>{status}</Tag>
    },
  },
  {
    title: 'Hành động',
    key: 'actions',
    width: 220,
    render: () => (
      <Button type="link">Xác nhận / Đổi lịch</Button>
    ),
  },
]

export default function LichHenPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Nhân viên' },
          { title: 'Quản lý lịch hẹn' },
        ]}
      >
        <PageSurface>
          <Title>Quản lý lịch hẹn</Title>
          <Description>
            Xem nhanh lịch hẹn hôm nay và cập nhật trạng thái khi khách đến, check-in hoặc đổi lịch.
          </Description>

          <Section>
            <SectionTitle>Lịch hẹn trong ngày</SectionTitle>
            <Table
              columns={columns}
              dataSource={appointments}
              pagination={false}
              rowKey="key"
              style={{ background: '#fff', borderRadius: 16, overflow: 'hidden' }}
            />
          </Section>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}
