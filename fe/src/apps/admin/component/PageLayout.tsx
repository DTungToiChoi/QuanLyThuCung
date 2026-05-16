import { Layout } from 'antd';
import { useState, type ReactNode } from 'react';
import MenuSideBar from './MenuSideBar';
import AppHeader from './AppHeader';

const { Sider, Content } = Layout;

interface Props {
  children?: ReactNode;
  hideSidebar?: boolean;
}

export default function PageLayout({ children, hideSidebar = false }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#fcf9f8',
      }}
    >
      <AppHeader />
      
      <Layout
        style={{
          minWidth: 0,
          flex: '1 1 auto',
          minHeight: 0,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          background: '#fcf9f8',
        }}
      >
        {!hideSidebar && (
          <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={280}
            collapsedWidth={80}
            theme="light"
            style={{
              height: '100%',
              maxHeight: '100%',
              overflow: 'hidden',
              background: '#fcfbf7',
              flexShrink: 0,
            }}
          >
            <MenuSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
          </Sider>
        )}

        <Content
          style={{
            background: '#fcf9f8',
            flex: 1,
            minHeight: 0,
            height: '100%',
            overflow: 'hidden',
            overflowX: 'hidden',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
