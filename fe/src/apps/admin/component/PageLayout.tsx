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
    <Layout style={{ height: 'var(--device-height)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <AppHeader />
      
      <Layout style={{ minWidth: 0, flex: 1, display: 'flex', flexDirection: 'row' }}>
        {!hideSidebar && (
          <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={280}
            collapsedWidth={80}
            // theme="dark"
            style={{ 
              overflow: 'auto',  
            }}
          >
          <MenuSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
          </Sider>
        )}

        <Content
          style={{
            background: '#fff',
            flex: 1,
            minHeight: 0,
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
