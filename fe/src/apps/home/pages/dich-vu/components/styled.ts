import styled from 'styled-components'
import { token } from '../../../styles/theme'

export const Hero = styled.section`
  min-height: 420px;
  display: flex;
  align-items: center;
  background:
    linear-gradient(90deg, rgba(252, 249, 248, 0.96), rgba(252, 249, 248, 0.62), rgba(252, 249, 248, 0.18)),
    url('https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80') center/cover;
`

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
`

export const Grid = styled.div`
  display: grid;
  gap: 22px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const ServiceImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  background: ${token.surfaceContainerLowest};
`

export const ServiceBody = styled.div`
  padding: 22px;
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`

export const Tag = styled.span`
  border-radius: 999px;
  padding: 5px 10px;
  background: ${token.primaryFixed};
  color: ${token.onPrimaryFixed};
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
`

export const ServiceTitle = styled.h3`
  margin: 0;
  color: ${token.onSurface};
  font-family: 'DM Serif Display', serif;
  font-size: 24px;
  font-weight: 400;
`

export const Text = styled.p`
  margin: 12px 0 18px;
  color: ${token.onSurfaceVariant};
  line-height: 1.65;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${token.outline};
  font-size: 14px;
`

export const Price = styled.strong`
  color: ${token.primary};
  font-size: 20px;
`

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`

export const LoadingWrap = styled.div`
  min-height: 260px;
`
