import { Space } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

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
  box-shadow:
    0 1px 0 0 rgba(107, 126, 70, 0.12),
    0 4px 24px -4px rgba(107, 126, 70, 0.1);
  color: #2c3320;
  top: 0;
  z-index: 10;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2c3320;
`;

export const GovEmblem = styled.img`
  width: auto;
  height: 38px;
  display: block;
  filter: drop-shadow(0 1px 3px rgba(107, 126, 70, 0.25));
`;

export const SystemTitle = styled.span`
  color: #6b7e46;
  font-family: 'Playfair Display', 'Georgia', serif;
  font-size: 1.125rem;
  font-weight: 700;
  font-style: italic;
  letter-spacing: -0.01em;
`;

export const Right = styled(Space)`
  cursor: pointer;
  color: #6b7e46;
`;

export const SidebarSurface = styled.aside`
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, rgba(252, 251, 247, 0.96), rgba(246, 243, 242, 0.98)),
    #fcfbf7;
  border-right: 1px solid rgba(107, 126, 70, 0.14);
  box-shadow: 6px 0 24px rgba(44, 51, 32, 0.04);
`;

export const SidebarHeader = styled.div<{ $collapsed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.$collapsed ? 'center' : 'space-between'};
  min-height: 72px;
  padding: ${props => props.$collapsed ? '0' : '0 16px 0 20px'};
  gap: 12px;
  color: #2c3320;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  border-bottom: 1px solid rgba(107, 126, 70, 0.12);
  transition: all 0.2s;
  
  span {
    color: #6b7e46;
  }
`;

export const SidebarBrand = styled.div`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SidebarTitle = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const SidebarTitleMain = styled.span`
  overflow: hidden;
  color: #2c3320 !important;
  font-size: 14px;
  font-weight: 800;
  text-overflow: ellipsis;
`;

export const SidebarTitleSub = styled.span`
  margin-top: 3px;
  overflow: hidden;
  color: #7a8a6a !important;
  font-size: 11px;
  font-weight: 600;
  text-overflow: ellipsis;
`;

export const SidebarToggle = styled.button`
  width: 34px;
  height: 34px;
  border: 1px solid rgba(107, 126, 70, 0.18);
  border-radius: 10px;
  background: rgba(107, 126, 70, 0.08);
  color: #6b7e46;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s, border-color 0.18s;

  &:hover {
    background: rgba(107, 126, 70, 0.14);
    border-color: rgba(107, 126, 70, 0.28);
    transform: translateY(-1px);
  }
`;

export const SidebarNav = styled.div`
  flex: 1;
  min-height: 0;
  padding: 14px 10px;
  overflow-y: auto;

  .ant-menu {
    color: #617053;
    font-weight: 600;
  }

  .ant-menu-item {
    height: 44px;
    line-height: 44px;
    margin: 5px 0;
    border-radius: 12px;
    color: #617053;
  }

  .ant-menu-item .anticon {
    color: #7a8a6a;
    font-size: 17px;
  }

  .ant-menu-item:hover {
    background: rgba(107, 126, 70, 0.08) !important;
    color: #6b7e46 !important;
  }

  .ant-menu-item-selected {
    background: #dce5d4 !important;
    color: #2c3320 !important;
    font-weight: 800;
  }

  .ant-menu-item-selected .anticon {
    color: #6b7e46;
  }
`;

export const SidebarFooter = styled.div<{ $collapsed: boolean }>`
  margin: 10px;
  padding: ${({ $collapsed }) => ($collapsed ? '10px 0' : '12px')};
  border: 1px solid rgba(107, 126, 70, 0.14);
  border-radius: 14px;
  background: rgba(107, 126, 70, 0.07);
  color: #617053;
  text-align: ${({ $collapsed }) => ($collapsed ? 'center' : 'left')};
  font-size: 12px;
  font-weight: 600;
`;
