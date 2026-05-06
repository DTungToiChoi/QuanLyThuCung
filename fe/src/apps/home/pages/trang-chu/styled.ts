import styled, { keyframes } from "styled-components";
import { token } from "../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: scale(1); }
`;

export const HeroSection = styled.section`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const HeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(252, 249, 248, 0.93) 0%,
    rgba(252, 249, 248, 0.55) 55%,
    transparent 100%
  );
`;

export const HeroInner = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  width: 100%;
`;

export const HeroContent = styled.div`
  max-width: 560px;
  animation: ${fadeUp} 0.7s ease both;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  background: ${token.primaryFixed};
  color: ${token.onPrimaryFixed};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const HeroTitle = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-size: clamp(32px, 5vw, 46px);
  font-weight: 400;
  line-height: 1.15;
  color: ${token.onSurface};
  margin-bottom: 18px;
  letter-spacing: -0.01em;

  em {
    font-style: italic;
    color: ${token.primary};
  }
`;

export const HeroDesc = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: ${token.onSurfaceVariant};
  margin-bottom: 32px;
  max-width: 460px;
`;

export const HeroButton = styled.button`
  background: ${token.primary};
  color: ${token.onPrimary};
  border: none;
  border-radius: 14px;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 8px 28px rgba(0, 106, 100, 0.3);
  transition: background 0.2s, transform 0.15s, box-shadow 0.2s;

  &:hover {
    background: ${token.primaryContainer};
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(0, 106, 100, 0.4);
  }

  &:active {
    opacity: 0.85;
  }
`;

export const Section = styled.section<{ $bg?: string }>`
  padding: 80px 0;
  background: ${({ $bg }) => $bg || token.background};
`;

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionHead = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

export const SectionTitle = styled.h2`
  font-family: 'DM Serif Display', serif;
  font-size: clamp(26px, 4vw, 34px);
  font-weight: 400;
  color: ${token.primary};
  margin-bottom: 14px;
`;

export const TitleUnderline = styled.div`
  width: 56px;
  height: 3px;
  background: ${token.primaryContainer};
  border-radius: 50px;
  margin: 0 auto;
`;

export const ServiceGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ServiceCard = styled.div`
  background: ${token.surfaceContainerLowest};
  border: 1px solid ${token.outlineVariant};
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.25s, transform 0.25s;
  animation: ${scaleIn} 0.5s ease both;

  &:hover {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  &:hover img {
    transform: scale(1.08);
  }
`;

export const ServiceImgWrap = styled.div`
  height: 200px;
  overflow: hidden;
`;

export const ServiceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

export const ServiceBody = styled.div`
  padding: 22px;
`;

export const ServiceTitle = styled.h3`
  font-family: 'DM Serif Display', serif;
  font-size: 21px;
  font-weight: 400;
  color: ${token.onSurface};
  margin-bottom: 8px;
`;

export const ServiceDesc = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${token.onSurfaceVariant};
  margin-bottom: 18px;
`;

export const ServiceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServicePrice = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${token.primary};
`;

export const ArrowBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${token.surfaceContainerLow};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${token.primary};
  font-size: 20px;
  border: none;
  outline: none;
  transition: all 0.2s;

  &:hover {
    background: ${token.primaryFixed};
    transform: translateX(2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const WhyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const WhyIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(0, 178, 169, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 34px;
  color: ${token.primary};
`;

export const WhyTitle = styled.h4`
  font-family: 'DM Serif Display', serif;
  font-size: 20px;
  font-weight: 400;
  color: ${token.onSurface};
  margin-bottom: 10px;
`;

export const WhyDesc = styled.p`
  font-size: 14px;
  line-height: 1.65;
  color: ${token.onSurfaceVariant};
`;

export const TestGrid = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
`;

export const TestCard = styled.div`
  background: ${token.surfaceContainerLowest};
  border: 1px solid ${token.outlineVariant};
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${token.primary};
  font-size: 20px;
  margin-bottom: 14px;
`;

export const TestText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  font-style: italic;
  color: ${token.onSurfaceVariant};
  margin-bottom: 20px;
`;

export const TestAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div<{ $bg: string; $color: string }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
`;

export const AuthorName = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${token.onSurface};
`;

export const AuthorSub = styled.p`
  font-size: 11px;
  color: ${token.onSurfaceVariant};
  margin-top: 2px;
`;