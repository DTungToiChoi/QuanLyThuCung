import { ClockCircleOutlined } from '@ant-design/icons'
import { Empty, Pagination, Spin } from 'antd'
import type { IMetaData } from '@/shared/types/response.type'
import { urlHinhAnh } from '@/shared/utils/mediaUrl'
import type { IDichVu } from '../../../services'
import { Button, Card, Container, Section, SectionTitle } from '../../../component/page-styled'
import {
  Grid,
  LoadingWrap,
  Meta,
  PaginationWrap,
  Price,
  Row,
  ServiceBody,
  ServiceImage,
  ServiceTitle,
  Tag,
  Text,
} from './styled'

const fallbackImage = 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80'

type DichVuListProps = {
  data: IDichVu[]
  isLoading: boolean
  metaData: IMetaData | null | undefined
  page: number
}

const formatPrice = (price: string) => `${Number(price).toLocaleString('vi-VN')}đ`

export default function DichVuList({
  data,
  isLoading,
  metaData,
  page,
}: DichVuListProps) {
  const total = metaData?.total ?? 0

  return (
    <Section>
      <Container>
        <SectionTitle>Danh sách dịch vụ</SectionTitle>
        <Spin spinning={isLoading} tip="Đang tải dịch vụ...">
          {isLoading && data.length === 0 ? (
            <LoadingWrap />
          ) : data.length === 0 ? (
            <Empty description="Chưa có dịch vụ" />
          ) : (
            <Grid>
              {data.map((service) => (
                <Card key={service.id}>
                  <ServiceImage src={urlHinhAnh(service.hinhAnhUrl) || fallbackImage} alt={service.tenDichVu} />
                  <ServiceBody>
                    <Row>
                      <ServiceTitle>{service.tenDichVu}</ServiceTitle>
                      <Tag>Dịch vụ</Tag>
                    </Row>
                    <Text>{service.moTaDichVu || 'Đội ngũ sẽ tư vấn gói chăm sóc phù hợp cho thú cưng của bạn.'}</Text>
                    <Meta>
                      <ClockCircleOutlined />
                      Liên hệ để tư vấn thời lượng
                    </Meta>
                    <Row style={{ marginTop: 18, alignItems: 'center' }}>
                      <Price>{formatPrice(service.giaDichVu)}</Price>
                      <Button>Đặt lịch</Button>
                    </Row>
                  </ServiceBody>
                </Card>
              ))}
            </Grid>
          )}
        </Spin>

        {total > 0 && (
          <PaginationWrap>
            <Pagination
              current={metaData?.page ?? page}
              total={total}
              showTotal={(totalRecord) => `${totalRecord} dịch vụ`}
            />
          </PaginationWrap>
        )}
      </Container>
    </Section>
  )
}
