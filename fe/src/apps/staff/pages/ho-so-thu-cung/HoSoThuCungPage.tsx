import { Table, Tag } from 'antd'
import { PageContainer, PageLayout } from '../../component'
import { PageSurface, Section, SectionTitle, Title, Description } from '../shared/styled'

const profiles = [
  {
    key: '1',
    pet: 'Moka',
    owner: 'Nguyễn Hoàng',
    species: 'Chó',
    notes: 'Nhát người, không thích sấy',
  },
  {
    key: '2',
    pet: 'Nala',
    owner: 'Trần Minh',
    species: 'Mèo',
    notes: 'Sợ máy sấy, dị ứng sữa tắm',
  },
  {
    key: '3',
    pet: 'Bình',
    owner: 'Lê Mai',
    species: 'Chó',
    notes: 'Cần cắt móng nhẹ, thân thiện',
  },
]

const columns = [
  {
    title: 'Thú cưng',
    dataIndex: 'pet',
    key: 'pet',
  },
  {
    title: 'Chủ',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: 'Loài',
    dataIndex: 'species',
    key: 'species',
    render: (species: string) => <Tag color="green">{species}</Tag>,
  },
  {
    title: 'Ghi chú',
    dataIndex: 'notes',
    key: 'notes',
    render: (notes: string) => <span>{notes}</span>,
  },
]

export default function HoSoThuCungPage() {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={[
          { title: 'Nhân viên' },
          { title: 'Hồ sơ thú cưng' },
        ]}
      >
        <PageSurface>
          <Title>Hồ sơ thú cưng</Title>
          <Description>
            Lưu lại các đặc điểm, tiền sử dị ứng và thói quen của thú cưng để mỗi ca làm đẹp đều an toàn.
          </Description>

          <Section>
            <SectionTitle>Danh sách hồ sơ</SectionTitle>
            <Table
              columns={columns}
              dataSource={profiles}
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
