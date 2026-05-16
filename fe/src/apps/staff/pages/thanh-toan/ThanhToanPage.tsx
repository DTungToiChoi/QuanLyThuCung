import { Button, Card, Col, Row, Table, Tag } from 'antd'
import { PageContainer, PageLayout } from '../../component'
import { PageSurface, Section, SectionTitle, Title, Description } from '../shared/styled'

const invoices = [
  {
    key: '1',
    order: 'HD-00123',
    customer: 'Nguyễn Hoàng',
    amount: '420.000đ',
    method: 'Tiền mặt',
    status: 'Chưa thanh toán',
  },
  {
    key: '2',
    order: 'HD-00124',
    customer: 'Trần Minh',
    amount: '620.000đ',
    method: 'Chuyển khoản',
    status: 'Đã thanh toán',
  },
]

const columns = [
  {
    title: 'Mã hóa đơn',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Khách hàng',
    dataIndex: 'customer',
    key: 'customer',
  },
  {
    title: 'Số tiền',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Phương thức',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Đã thanh toán' ? 'green' : 'orange'}>{status}</Tag>
    ),
  },
  {
    title: 'Hành động',
    key: 'actions',
    render: () => <Button type="link">In hóa đơn</Button>,
  },
]

export default function ThanhToanPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Nhân viên' },
          { title: 'Thanh toán' },
        ]}
      >
        <PageSurface>
          <Title>Thanh toán & hóa đơn</Title>
          <Description>
            Áp mã giảm giá, chọn phương thức thanh toán và in hóa đơn nhanh cho khách.
          </Description>

          <Row gutter={[18, 18]}>
            <Col xs={24} md={12}>
              <Card title="Tổng doanh thu" bordered={false} style={{ borderRadius: 18 }}>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#2c3320' }}>1.042.000đ</div>
                <div style={{ color: '#617053', marginTop: 8 }}>Doanh thu hôm nay</div>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card title="Phương thức thanh toán" bordered={false} style={{ borderRadius: 18 }}>
                <div>Tiền mặt, Chuyển khoản, Ví điện tử</div>
                <Button type="primary" style={{ marginTop: 16 }}>
                  Tạo phiếu thanh toán
                </Button>
              </Card>
            </Col>
          </Row>

          <Section>
            <SectionTitle>Hóa đơn gần đây</SectionTitle>
            <Table
              columns={columns}
              dataSource={invoices}
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
