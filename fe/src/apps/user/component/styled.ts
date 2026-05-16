import styled from 'styled-components'
import { Space } from 'antd'
import { Header } from 'antd/es/layout/layout'

export const SidebarSurface = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f8f7f3;
  border-right: 1px solid rgba(126, 124, 113, 0.15);
`

export const SidebarHeader = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$collapsed ? 'center' : 'space-between')};
  padding: ${({ $collapsed }) => ($collapsed ? '0 12px' : '18px 20px')};
  border-bottom: 1px solid rgba(126, 124, 113, 0.12);
  min-height: 84px;
`

export const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SidebarTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SidebarTitleMain = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #2c3320;
`

export const SidebarTitleSub = styled.div`
  font-size: 12px;
  color: #6f7d62;
`

export const SidebarToggle = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  color: #4b5337;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(107, 126, 70, 0.1);
  }
`

export const SidebarNav = styled.div`
  flex: 1;
  padding: 16px 0;
  background: transparent;
`

export const SidebarFooter = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $collapsed }) => ($collapsed ? 'center' : 'flex-start')};
  padding: ${({ $collapsed }) => ($collapsed ? '18px 0' : '18px 22px')};
  color: #6f7d62;
  font-size: 14px;
  border-top: 1px solid rgba(126, 124, 113, 0.12);
`

export const StyledHeader = styled(Header)`
  height: var(--ant-layout-header-height);
  line-height: var(--ant-layout-header-height);
  padding: 0 24px;
  background: rgba(252, 251, 247, 0.92);
  backdrop-filter: blur(16px) saturate(1.4);
  -webkit-backdrop-filter: blur(16px) saturate(1.4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  border-bottom: 1px solid rgba(107, 126, 70, 0.15);
  color: #2c3320;
  top: 0;
  z-index: 10;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2c3320;
`

export const GovEmblem = styled.img`
  width: auto;
  height: 38px;
  display: block;
  filter: drop-shadow(0 1px 3px rgba(107, 126, 70, 0.25));
`

export const SystemTitle = styled.span`
  color: #6b7e46;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: 1.125rem;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.01em;
`

export const Right = styled(Space)`
  cursor: pointer;
  color: #6b7e46;
`
