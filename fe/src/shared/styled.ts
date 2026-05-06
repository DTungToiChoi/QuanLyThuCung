import { Select } from "antd";
import styled from "styled-components";

export const FileNameCell = styled.div<{ $clickable: boolean }>`
  cursor: ${({ $clickable }) => $clickable ? 'pointer' : 'default'};
  
  &:hover span {
    color: ${({ $clickable }) => $clickable ? '#1677ff' : 'inherit'};
  }
`;

export const LayoutWrapper = styled.div`
  height: 100%;

  background-color: var(--bg-secondary);
  position: relative;
`;

export const ContentWrapper = styled.main<{ $sidebarCollapsed: boolean }>`
  margin-left: ${({ $sidebarCollapsed }) =>
    $sidebarCollapsed ? "6rem" : "var(--sidebar-width)"};

  padding: 0;
  padding-top: var(--header-admin-height);

  height: 100%;
  overflow-y: auto;
  background: #ffffff;
  transition: margin-left 0.2s ease;
`;


export const LayoutContent = styled.div`
  padding: var(--gap-global);
  background-color: #fff;
`;
export const ButtonLayout = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 8px;

  .ant-btn-primary {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
    opacity: 0.92;
  }
`;

export const WrapInputSearch = styled.div`
  display: flex;
  gap: 0.5rem;

  .ant-input-group-wrapper {
    display: inline-block;
    text-align: start;
    vertical-align: top;
  }

  .ant-input-search-large .ant-input-affix-wrapper,
  .ant-input-search-large .ant-input-search-button {
    height: 3.5rem;
  }

  .ant-input-affix-wrapper {
    width: 35rem;
  }

  .ant-btn-lg {
    height: 3.5rem;
  }

  .ant-select-single.ant-select-lg {
    font-size: 1.6rem;
    height: 3.5rem !important;
  }
  .ant-select-selector {
    height: 3.5rem !important;
  }

  && .ant-input-search > .ant-input-group > .ant-input-group-addon > .ant-btn,
  && .ant-input-search-button,
  && .ant-input-search-button.ant-btn,
  && .ant-input-search-button.ant-btn-primary {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
  }

  && .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon
    > .ant-btn:not(:disabled):not(.ant-btn-disabled),
  && .ant-input-search-button:not(:disabled):not(.ant-btn-disabled) {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
  }

  && .ant-input-search > .ant-input-group > .ant-input-group-addon > .ant-btn:hover,
  && .ant-input-search > .ant-input-group > .ant-input-group-addon > .ant-btn:focus,
  && .ant-input-search-button:hover,
  && .ant-input-search-button:focus,
  && .ant-input-search-button.ant-btn:hover,
  && .ant-input-search-button.ant-btn:focus,
  && .ant-input-search-button.ant-btn-primary:hover,
  && .ant-input-search-button.ant-btn-primary:focus {
    background-color: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
    opacity: 0.92;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--gap-global);
`;

export const StyledSelect = styled(Select)`
  min-width: 200px;
  height: 3.5rem;
  width: 100%;
  margin-left: 0.4rem;
  .ant-select-selector {
    width: 165px !important;
    height: 3.5rem;
    align-items: center;
    padding: 0 2.5rem 0 1rem !important;
  }
`;