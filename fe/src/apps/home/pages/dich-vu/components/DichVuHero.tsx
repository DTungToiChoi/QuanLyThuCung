import {
  Button,
  Container,
  Eyebrow,
  Lead,
  PageTitle,
} from '../../../component/page-styled'
import { Hero, HeroActions } from './styled'

export default function DichVuHero() {
  return (
    <Hero>
      <Container>
        <Eyebrow>Premium pet care</Eyebrow>
        <PageTitle>Dịch vụ chăm sóc thú cưng</PageTitle>
        <Lead>
          Quy trình chăm sóc chuyên nghiệp, sản phẩm an toàn và đội ngũ yêu thú cưng giúp mỗi bé luôn sạch khỏe,
          thư giãn và tự tin.
        </Lead>
        <HeroActions>
          <Button>Đặt lịch ngay</Button>
        </HeroActions>
      </Container>
    </Hero>
  )
}
