import styled from 'styled-components'

export const PageSurface = styled.div`
  min-height: 100%;
  box-sizing: border-box;
  padding: 28px;
  background:
    linear-gradient(135deg, rgba(107, 126, 70, 0.08), rgba(252, 249, 248, 0.92) 42%),
    #fcf9f8;
`

export const Hero = styled.section`
  margin-bottom: 24px;
`

export const Panel = styled.div`
  border: 1px solid rgba(107, 126, 70, 0.16);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.86);
  box-shadow: 0 14px 38px rgba(44, 51, 32, 0.08);
`

export const IntroPanel = styled(Panel)`
  padding: 30px;
`

export const Title = styled.h1`
  margin: 0;
  color: #2c3320;
  font-family: 'DM Serif Display', serif;
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 400;
  line-height: 1.15;
`

export const Description = styled.p`
  max-width: 720px;
  margin: 14px 0 0;
  color: #617053;
  font-size: 15px;
  line-height: 1.7;
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 26px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.div`
  min-height: 96px;
  padding: 16px;
  border-radius: 12px;
  background: rgba(107, 126, 70, 0.08);
  color: #2c3320;
`

export const StatValue = styled.div`
  font-size: 26px;
  font-weight: 700;
`

export const StatLabel = styled.div`
  margin-top: 6px;
  color: #6f7d62;
  font-size: 13px;
`

export const Toolbar = styled(Panel)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px;
  margin-bottom: 16px;
`