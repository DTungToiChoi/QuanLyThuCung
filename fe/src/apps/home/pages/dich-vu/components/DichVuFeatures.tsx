import {
  CheckCircleOutlined,
  ScissorOutlined,
  SkinOutlined,
} from '@ant-design/icons'
import { Card, Container, Section } from '../../../component/page-styled'
import { token } from '../../../styles/theme'
import { Grid, Meta, ServiceBody, ServiceTitle, Text } from './styled'

const features = [
  { icon: <SkinOutlined />, title: 'Sản phẩm an toàn', text: 'Ưu tiên sản phẩm dịu nhẹ, phù hợp da nhạy cảm.' },
  { icon: <ScissorOutlined />, title: 'Tạo kiểu theo bé', text: 'Tư vấn kiểu lông dựa trên giống, thói quen và mùa.' },
  { icon: <CheckCircleOutlined />, title: 'Theo dõi rõ ràng', text: 'Ghi nhận tình trạng trước và sau khi hoàn tất dịch vụ.' },
]

export default function DichVuFeatures() {
  return (
    <Section>
      <Container>
        <Grid>
          {features.map((item) => (
            <Card key={item.title}>
              <ServiceBody>
                <Meta style={{ color: token.primary, fontSize: 26 }}>{item.icon}</Meta>
                <ServiceTitle style={{ marginTop: 14 }}>{item.title}</ServiceTitle>
                <Text>{item.text}</Text>
              </ServiceBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
