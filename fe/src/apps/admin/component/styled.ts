import { Space } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const StyledHeader = styled(Header)`
  height: var(--ant-layout-header-height);
  line-height: var(--ant-layout-header-height);
  padding: 0 16px;
  background: #ba1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  border-bottom: none;
  color: #ffffff;
  top: 0;
  z-index: 10;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
`;

export const GovEmblem = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ffde00;
  border-radius: 50%;
  border: 2px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SystemTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const Right = styled(Space)`
  cursor: pointer;
  color: #ffffff;
`;

export const SidebarHeader = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.$collapsed ? 'center' : 'flex-start'};
  height: 56px;
  padding: ${props => props.$collapsed ? '0' : '0 24px'};
  gap: 12px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  
  span {
    color: rgba(255, 255, 255, 0.65);
  }
`;
