import styled from 'styled-components'
import { token } from '../styles/theme'

export const Page = styled.div`
  background: ${token.background};
  color: ${token.onSurface};
`

export const Section = styled.section<{ $bg?: string }>`
  padding: 72px 0;
  background: ${({ $bg }) => $bg || token.background};
`

export const Container = styled.div`
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
`

export const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: ${token.primary};
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const PageTitle = styled.h1`
  margin: 0;
  color: ${token.onSurface};
  font-family: 'DM Serif Display', serif;
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 400;
  line-height: 1.08;
`

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  color: ${token.primary};
  font-family: 'DM Serif Display', serif;
  font-size: clamp(28px, 4vw, 38px);
  font-weight: 400;
  line-height: 1.15;
`

export const Lead = styled.p`
  margin: 16px 0 0;
  max-width: 680px;
  color: ${token.onSurfaceVariant};
  font-size: 17px;
  line-height: 1.7;
`

export const Button = styled.button<{ $variant?: 'outline' }>`
  min-height: 44px;
  border: 1px solid ${({ $variant }) => ($variant === 'outline' ? token.primary : token.primary)};
  border-radius: 10px;
  padding: 0 20px;
  background: ${({ $variant }) => ($variant === 'outline' ? 'transparent' : token.primary)};
  color: ${({ $variant }) => ($variant === 'outline' ? token.primary : token.onPrimary)};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.18s, background 0.18s, color 0.18s;

  &:hover {
    transform: translateY(-1px);
    background: ${({ $variant }) => ($variant === 'outline' ? token.primary : token.primaryContainer)};
    color: ${token.onPrimary};
  }
`

export const Card = styled.article`
  background: ${token.surfaceContainerLowest};
  border: 1px solid ${token.outlineVariant};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(27, 28, 28, 0.06);
`
