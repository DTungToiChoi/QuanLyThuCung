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
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
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
  margin: 12px 0 0;
  color: #617053;
  font-size: 15px;
  line-height: 1.7;
  max-width: 720px;
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.div`
  min-height: 108px;
  padding: 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(107, 126, 70, 0.14);
  box-shadow: 0 12px 30px rgba(44, 51, 32, 0.06);
`

export const StatValue = styled.div`
  color: #2c3320;
  font-size: 28px;
  font-weight: 800;
`

export const StatLabel = styled.div`
  margin-top: 10px;
  color: #6f7d62;
  font-size: 13px;
`

export const Body = styled.section`
  min-height: 240px;
  padding: 24px;
  border-radius: 18px;
  border: 1px solid rgba(107, 126, 70, 0.16);
  background: rgba(255, 255, 255, 0.9);
  color: #2c3320;
`
