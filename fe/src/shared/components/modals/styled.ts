import { Form } from 'antd';
import styled from 'styled-components';

export const ModalHeader = styled.div<{ height?: string | number }>`
  padding: 1rem 1.6rem;
  height: ${(props) => props.height || 'var(--modal-header-height, 4.8rem)'};
  display: flex;
  background-color: var(--primary);
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
  
  z-index: 20;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  flex-shrink: 0;
`;

export const ModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

export const ModalTitle = styled.h6`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 3rem;
  color: var(--white);
  width: 100%;
`;

export const ModalHeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrintButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  padding: 4px 1rem 4px 1rem;
  background-color: var(--white);
`;

export const ModalBody = styled.div`
  padding: 1.6rem;
  /* padding-bottom: 0; */
  max-height: calc(var(--modal-max-height, 80vh) - var(--modal-header-height, 4.8rem));
  overflow-y: auto;
  overflow-x: hidden;

  /* &::-webkit-scrollbar {
    display: none;
  } */

  .ant-tabs-nav-wrap {
    border-bottom: 1px solid var(--border-primary);
  }

  .ant-tabs > .ant-tabs-nav {
    height: var(--modal-tabs-height);
    position: sticky;
    top: -1.6rem;
    left: 0;
    right: 0;
    background-color: var(--bg-primary);
    z-index: 10;
    margin-top: -1.6rem;
    margin-bottom: 0;

    .ant-tabs-tab {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0px;
  }

  .ant-form-item-label {
    padding-bottom: 0;
    flex-shrink: 0;
    width: 180px;

    > label {
      font-weight: 500;
      color: #374151;
      height: auto;
      display: flex;
      text-align: left;
      word-wrap: break-word;
      word-break: break-word;
      white-space: normal;
      line-height: 1.5;
      margin-right: 16px;
    }
  }

  .ant-select.ant-select-in-form-item,
  .ant-input-number {
    max-width: 100%;
    width: 100%;
  }
  .ant-form-item-control {
    flex: 1;
  }

  .ant-input,
  .ant-select-selector,
  .ant-input-textarea textarea {
    border-radius: 4px;
    width: 100%;
  }

  .ant-input:focus,
  .ant-select-selector:focus,
  .ant-input-textarea textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;