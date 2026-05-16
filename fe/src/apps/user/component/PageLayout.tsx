import { Layout } from 'antd'
import { useState, type ReactNode } from 'react'
import StaffMenuSideBar from './MenuSideBar'
import AppHeader from './AppHeader'

const { Sider, Content } = Layout

interface Props {
  children?: ReactNode
}

export default function PageLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout
      style={{
        width: '100%',
        minWidth: 0,
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: '#f7f6f1',
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
          background: '#f7f6f1',
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          width={260}
          collapsedWidth={80}
          theme="light"
          style={{
            height: '100%',
            maxHeight: '100%',
            overflow: 'hidden',
            background: '#f8f7f3',
            flexShrink: 0,
          }}
        >
          <StaffMenuSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        </Sider>

        <Content
          style={{
            background: '#f7f6f1',
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
  )
}
