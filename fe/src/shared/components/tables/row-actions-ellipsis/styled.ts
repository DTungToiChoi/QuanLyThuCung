import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ChildrenWrapper = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
`;

export const RowButtonGroup = styled.div<{ active?: boolean }>`
  display: ${(props) => (props.active ? 'flex !important' : 'none')};
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  margin: -0.6rem 0;
  position: absolute;
  /* bottom: 0; */
  left: 50%;
  transform: translateX(-50%);
  min-width: 12rem;
  `;

export const RowActionButton = styled.button`
  z-index: 1;
  cursor: pointer;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-secondary);
  &:hover {
    background-color: var(--bg-primary);
  }
`;
