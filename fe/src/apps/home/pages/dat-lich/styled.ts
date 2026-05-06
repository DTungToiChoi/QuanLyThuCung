import styled from "styled-components"
import { token } from "../../styles/theme"
import { Section } from "../trang-chu/styled"
import { Card } from "antd"

export const Shell = styled.div`
  min-height: 100vh;
  background: ${token.background};
`

export const Header = styled(Section)`
  padding-top: 76px;
  padding-bottom: 38px;
`

export const BookingGrid = styled.div`
  display: grid;
  gap: 24px;

  @media (min-width: 980px) {
    grid-template-columns: 300px minmax(0, 1fr);
    align-items: start;
  }
`

export const SidePanel = styled.aside`
  position: sticky;
  top: 106px;
  display: grid;
  gap: 18px;
`

export const StepList = styled(Card)`
  padding: 18px;
`

export const Step = styled.div<{ $active?: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-left: 4px solid ${({ $active }) => ($active ? token.primary : 'transparent')};
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'rgba(107, 126, 70, 0.1)' : 'transparent')};
  opacity: ${({ $active }) => ($active ? 1 : 0.55)};

  svg {
    color: ${({ $active }) => ($active ? token.primary : token.outline)};
    font-size: 20px;
  }
`

export const StepLabel = styled.p`
  margin: 0;
  color: ${token.primary};
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
`

export const StepTitle = styled.p`
  margin: 2px 0 0;
  color: ${token.onSurface};
  font-weight: 700;
`

export const Summary = styled(Card)`
  padding: 20px;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  color: ${token.onSurfaceVariant};

  strong {
    color: ${token.onSurface};
  }
`

export const Total = styled(SummaryRow)`
  margin-top: 8px;
  border-top: 1px solid ${token.outlineVariant};
  color: ${token.onSurface};
  font-weight: 800;

  strong {
    color: ${token.primary};
  }
`

export const MainColumn = styled.div`
  display: grid;
  gap: 22px;
`

export const ServiceGrid = styled.div`
  display: grid;
  gap: 18px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const ServiceCard = styled(Card)<{ $selected?: boolean }>`
  border-color: ${({ $selected }) => ($selected ? token.primary : token.outlineVariant)};
  box-shadow: ${({ $selected }) =>
    $selected ? '0 16px 44px rgba(107, 126, 70, 0.16)' : undefined};
`

export const ServiceImage = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
`

export const Body = styled.div`
  padding: 20px;
`

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

export const CardTitle = styled.h3`
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

export const Price = styled.strong`
  color: ${token.primary};
  white-space: nowrap;
`

export const FormCard = styled(Card)`
  padding: 24px;
`

export const FormGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const Field = styled.label`
  display: grid;
  gap: 7px;
  color: ${token.onSurface};
  font-weight: 700;

  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid ${token.outlineVariant};
    border-radius: 8px;
    padding: 12px 14px;
    background: ${token.surfaceContainerLow};
    color: ${token.onSurface};
    font: inherit;
    outline: none;
  }

  textarea {
    min-height: 110px;
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: ${token.primary};
    box-shadow: 0 0 0 3px rgba(107, 126, 70, 0.14);
  }
`

export const FeatureGrid = styled.div`
  display: grid;
  gap: 16px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

export const Feature = styled(Card)`
  padding: 20px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  svg {
    color: ${token.primary};
    font-size: 28px;
  }
`