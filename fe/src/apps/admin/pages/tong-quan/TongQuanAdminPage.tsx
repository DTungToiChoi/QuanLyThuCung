import {
  AppstoreAddOutlined,
  BarChartOutlined,
  CalendarOutlined,
  GiftOutlined,
  PlusOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  WarningOutlined,
} from '@ant-design/icons'
import { Button, Progress, Segmented, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

import { PageContainer, PageLayout } from '../../component'
import {
  ContentGrid,
  Hero,
  ItemMeta,
  ItemTitle,
  MiniItem,
  MiniList,
  Panel,
  PanelHeader,
  PanelTitle,
  Stack,
  StatCard,
  StatGrid,
  StatLabel,
  StatMeta,
  StatValue,
  TitleBlock,
} from './styled'
import { ContentWrapper } from '../../styled'

type ServiceRow = {
  key: string
  ten: string
  phanLoai: string
  gia: string
  trangThai: string
}

type EmployeePerformanceRow = {
  key: string
  ten: string
  vaiTro: string
  lichHoanThanh: number
  danhGia: number
}

const serviceColumns: ColumnsType<ServiceRow> = [
  {
    title: 'Dịch vụ / Combo',
    dataIndex: 'ten',
    key: 'ten',
    render: (value: string) => <strong>{value}</strong>,
  },
  {
    title: 'Thiết lập giá',
    dataIndex: 'phanLoai',
    key: 'phanLoai',
  },
  {
    title: 'Giá tham khảo',
    dataIndex: 'gia',
    key: 'gia',
    width: 150,
  },
  {
    title: 'Trạng thái',
    dataIndex: 'trangThai',
    key: 'trangThai',
    width: 130,
    render: (value: string) => <Tag color="green">{value}</Tag>,
  },
]

const performanceColumns: ColumnsType<EmployeePerformanceRow> = [
  {
    title: 'Nhân viên',
    dataIndex: 'ten',
    key: 'ten',
    render: (value: string) => <strong>{value}</strong>,
  },
  {
    title: 'Vai trò',
    dataIndex: 'vaiTro',
    key: 'vaiTro',
  },
  {
    title: 'Lịch hoàn thành',
    dataIndex: 'lichHoanThanh',
    key: 'lichHoanThanh',
    width: 150,
  },
  {
    title: 'Đánh giá',
    dataIndex: 'danhGia',
    key: 'danhGia',
    width: 190,
    render: (value: number) => (
      <Progress percent={value} size="small" strokeColor="#6b7e46" />
    ),
  },
]

const services: ServiceRow[] = [
  {
    key: 'bath',
    ten: 'Tắm sấy gỡ rối',
    phanLoai: 'Chó/mèo, lông ngắn/lông dài, theo cân nặng',
    gia: '120.000đ - 350.000đ',
    trangThai: 'Đang bán',
  },
  {
    key: 'grooming',
    ten: 'Cắt tỉa tạo kiểu',
    phanLoai: 'Theo chủng loại và độ phức tạp',
    gia: '250.000đ - 600.000đ',
    trangThai: 'Đang bán',
  },
  {
    key: 'combo',
    ten: 'Combo chăm sóc toàn diện',
    phanLoai: 'Tắm, tỉa, vệ sinh tai, cắt móng',
    gia: '420.000đ - 890.000đ',
    trangThai: 'Đang bán',
  },
]

const performance: EmployeePerformanceRow[] = [
  {
    key: 'nv1',
    ten: 'Nguyễn Minh Anh',
    vaiTro: 'Kỹ thuật tắm/tỉa',
    lichHoanThanh: 42,
    danhGia: 94,
  },
  {
    key: 'nv2',
    ten: 'Trần Gia Hân',
    vaiTro: 'Lễ tân',
    lichHoanThanh: 36,
    danhGia: 88,
  },
  {
    key: 'nv3',
    ten: 'Phạm Quốc Bảo',
    vaiTro: 'Kỹ thuật khách sạn thú cưng',
    lichHoanThanh: 31,
    danhGia: 91,
  },
]

const popularServices: Array<[string, string, number]> = [
  ['Tắm sấy gỡ rối', '128 lượt đặt', 78],
  ['Combo chăm sóc toàn diện', '96 lượt đặt', 64],
  ['Khách sạn thú cưng', '74 lượt đặt', 52],
]

const inventoryAlerts: Array<[string, string, 'warning' | 'processing' | 'error']> = [
  ['Sữa tắm lông dài', 'Còn 4 chai', 'warning'],
  ['Pate mèo 80g', 'Còn 12 hộp', 'processing'],
  ['Dây dắt cỡ M', 'Còn 3 sản phẩm', 'error'],
]

export default function TongQuanAdminPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[{ title: 'Quản trị' }, { title: 'Tổng quan' }]}
      >
        <ContentWrapper>
          <Hero>
            <TitleBlock>
            </TitleBlock>

            <Segmented
              defaultValue="month"
              options={[
                { label: 'Ngày', value: 'day' },
                { label: 'Tuần', value: 'week' },
                { label: 'Tháng', value: 'month' },
                { label: 'Năm', value: 'year' },
              ]}
            />
          </Hero>

          <StatGrid>
            <StatCard>
              <StatLabel>
                <BarChartOutlined /> Doanh thu tháng
              </StatLabel>
              <StatValue>128,4tr</StatValue>
              <StatMeta>Tăng 18% so với tháng trước</StatMeta>
            </StatCard>

            <StatCard>
              <StatLabel>
                <CalendarOutlined /> Lịch đặt
              </StatLabel>
              <StatValue>312</StatValue>
              <StatMeta>286 thành công, 18 hủy, 8 bỏ lịch</StatMeta>
            </StatCard>

            <StatCard>
              <StatLabel>
                <TeamOutlined /> Nhân sự
              </StatLabel>
              <StatValue>12</StatValue>
              <StatMeta>4 lễ tân, 8 kỹ thuật tắm/tỉa</StatMeta>
            </StatCard>

            <StatCard>
              <StatLabel>
                <UserOutlined /> Khách VIP
              </StatLabel>
              <StatValue>47</StatValue>
              <StatMeta>1.245.000 điểm đang khả dụng</StatMeta>
            </StatCard>
          </StatGrid>

          <ContentGrid>
            <Stack>
              <Panel>
                <PanelHeader>
                  <PanelTitle>Quản lý dịch vụ & Combo</PanelTitle>
                  <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    style={{ background: '#6b7e46' }}
                  >
                    Thêm gói dịch vụ
                  </Button>
                </PanelHeader>
                <Table<ServiceRow>
                  columns={serviceColumns}
                  dataSource={services}
                  pagination={false}
                  scroll={{ x: 760 }}
                />
              </Panel>

              <Panel>
                <PanelHeader>
                  <PanelTitle>Báo cáo hiệu suất nhân viên</PanelTitle>
                  <Tag color="green">Ca trực tuần này</Tag>
                </PanelHeader>
                <Table<EmployeePerformanceRow>
                  columns={performanceColumns}
                  dataSource={performance}
                  pagination={false}
                  scroll={{ x: 700 }}
                />
              </Panel>
            </Stack>

            <Stack>
              <Panel>
                <PanelHeader>
                  <PanelTitle>Dịch vụ được ưa chuộng</PanelTitle>
                  <AppstoreAddOutlined style={{ color: '#6b7e46', fontSize: 20 }} />
                </PanelHeader>
                <MiniList>
                  {popularServices.map(([name, meta, percent]) => (
                    <MiniItem key={name}>
                      <div>
                        <ItemTitle>{name}</ItemTitle>
                        <ItemMeta>{meta}</ItemMeta>
                      </div>
                      <Progress
                        type="circle"
                        percent={percent}
                        size={54}
                        strokeColor="#6b7e46"
                      />
                    </MiniItem>
                  ))}
                </MiniList>
              </Panel>

              <Panel>
                <PanelHeader>
                  <PanelTitle>Khách hàng & Thành viên</PanelTitle>
                  <GiftOutlined style={{ color: '#6b7e46', fontSize: 20 }} />
                </PanelHeader>
                <MiniList>
                  <MiniItem>
                    <div>
                      <ItemTitle>Chương trình VIP Gold</ItemTitle>
                      <ItemMeta>Tự động nâng hạng khi chi tiêu từ 5.000.000đ</ItemMeta>
                    </div>
                    <Tag color="gold">VIP</Tag>
                  </MiniItem>
                  <MiniItem>
                    <div>
                      <ItemTitle>Coupon SPA20</ItemTitle>
                      <ItemMeta>Giảm 20% cho combo toàn diện, còn 96 lượt dùng</ItemMeta>
                    </div>
                    <Tag color="green">Đang chạy</Tag>
                  </MiniItem>
                </MiniList>
              </Panel>

              <Panel>
                <PanelHeader>
                  <PanelTitle>Cảnh báo kho hàng</PanelTitle>
                  <ShopOutlined style={{ color: '#6b7e46', fontSize: 20 }} />
                </PanelHeader>
                <MiniList>
                  {inventoryAlerts.map(([name, meta, color]) => (
                    <MiniItem key={name}>
                      <div>
                        <ItemTitle>{name}</ItemTitle>
                        <ItemMeta>{meta}</ItemMeta>
                      </div>
                      <Space>
                        <WarningOutlined />
                        <Tag color={color}>{color === 'error' ? 'Sắp hết' : 'Theo dõi'}</Tag>
                      </Space>
                    </MiniItem>
                  ))}
                </MiniList>
              </Panel>
            </Stack>
          </ContentGrid>
          </ContentWrapper>
      </PageContainer>
    </PageLayout>
  )
}
