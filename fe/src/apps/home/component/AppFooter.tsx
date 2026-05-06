import styled from "styled-components"
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons"

const Section = styled.section`
  padding: 60px 0;
  background: #6b7e46;
  color: #ffffff;
`

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 24px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`

const IconWrapper = styled.div`
  font-size: 20px;
  color: #e6f0d4;
  margin-top: 4px;
`

const Content = styled.div``

const Label = styled.p`
  font-weight: 600;
  margin-bottom: 4px;
`

const Value = styled.p`
  color: #e5e7eb;
`

const MapWrapper = styled.div`
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    height: 400px;
  }
`

const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`

export default function AppFooter() {
  return (
    <Section>
      <Container>
        <Grid>
          <Left>
            <Title>Liên hệ với chúng tôi</Title>

            <InfoGrid>
              <Item>
                <IconWrapper>
                  <EnvironmentOutlined />
                </IconWrapper>
                <Content>
                  <Label>Địa chỉ</Label>
                  <Value>54 Triều Khúc, Thanh Xuân, Hà Nội</Value>
                </Content>
              </Item>

              <Item>
                <IconWrapper>
                  <PhoneOutlined />
                </IconWrapper>
                <Content>
                  <Label>Hotline</Label>
                  <Value>0586540730 - 0522946828</Value>
                </Content>
              </Item>

              <Item>
                <IconWrapper>
                  <MailOutlined />
                </IconWrapper>
                <Content>
                  <Label>Email</Label>
                  <Value>trangvuspa@gmail.com</Value>
                </Content>
              </Item>

              <Item>
                <IconWrapper>
                  <ClockCircleOutlined />
                </IconWrapper>
                <Content>
                  <Label>Giờ làm việc</Label>
                  <Value>08:00 - 20:00 (Thứ 2 - Chủ Nhật)</Value>
                </Content>
              </Item>
            </InfoGrid>
          </Left>

          <MapWrapper>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.18157810401!2d105.79621711215358!3d20.985357289184638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc6bdc7f95f%3A0x3603ded07620df96!2zNTQgUC4gVHJp4buBdSBLaMO6YywgVHJp4buBdSBLaMO6YywgVGhhbmggTGnhu4d0LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1778060568507!5m2!1svi!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>

        </Grid>
      </Container>
    </Section>
  )
}