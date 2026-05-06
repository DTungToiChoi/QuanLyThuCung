import styled from "styled-components";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

interface Props {
  children: React.ReactNode;
}

// ===== Styled =====

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  flex: 1;
  margin-top: 64px; /* tránh bị header đè */
`;

// ===== Component =====

export default function MainLayout({ children }: Props) {
  return (
    <Wrapper>
      <AppHeader />

      <Content>{children}</Content>

      <AppFooter />
    </Wrapper>
  );
}