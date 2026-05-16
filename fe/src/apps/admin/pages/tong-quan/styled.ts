import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 22px;
`

export const TitleBlock = styled.div`
  max-width: 780px;
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
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.div`
  min-height: 124px;
  padding: 18px;
  border: 1px solid rgba(107, 126, 70, 0.16);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 38px rgba(44, 51, 32, 0.08);
`

export const StatLabel = styled.div`
  color: #6f7d62;
  font-size: 13px;
  font-weight: 700;
`

export const StatValue = styled.div`
  margin-top: 12px;
  color: #2c3320;
  font-size: 28px;
  font-weight: 800;
`

export const StatMeta = styled.div`
  margin-top: 8px;
  color: #7a8a6a;
  font-size: 12px;
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(360px, 0.65fr);
  gap: 18px;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const Panel = styled.section`
  min-width: 0;
  padding: 20px;
  border: 1px solid rgba(107, 126, 70, 0.16);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 14px 38px rgba(44, 51, 32, 0.08);
`

export const PanelHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
`

export const PanelTitle = styled.h2`
  margin: 0;
  color: #2c3320;
  font-size: 18px;
  font-weight: 800;
`

export const Stack = styled.div`
  display: grid;
  gap: 18px;
`

export const MiniList = styled.div`
  display: grid;
  gap: 12px;
`

export const MiniItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  background: rgba(107, 126, 70, 0.08);
`

export const ItemTitle = styled.div`
  color: #2c3320;
  font-weight: 800;
`

export const ItemMeta = styled.div`
  margin-top: 4px;
  color: #7a8a6a;
  font-size: 12px;
`
