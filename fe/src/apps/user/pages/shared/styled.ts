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
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
`

export const Title = styled.h1`
  margin: 0;
  color: #2c3320;
  font-family: 'DM Serif Display', serif;
  font-size: clamp(28px, 4vw, 40px);
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
  background: rgba(255, 255, 255, 0.95);
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

export const Section = styled.section`
  margin-top: 24px;
`

export const SectionTitle = styled.div`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 700;
  color: #2c3320;
`

export const CardGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const TaskPanel = styled.div`
  padding: 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(107, 126, 70, 0.14);
  box-shadow: 0 12px 30px rgba(44, 51, 32, 0.06);
`

export const StatusTag = styled.span<{ $status: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background: ${({ $status }) =>
    $status === 'Chờ xác nhận'
      ? '#f5a623'
      : $status === 'Đã nhận lịch'
      ? '#2f9e44'
      : $status === 'Đang xử lý'
      ? '#1890ff'
      : '#6f7d62'};
`
