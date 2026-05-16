import type { ReactNode } from 'react'
import { PageContainer, PageLayout } from '../../component'
import {
  Body,
  PageSurface,
  Hero,
  Title,
  Description,
  StatCard,
  StatGrid,
  StatLabel,
  StatValue,
} from './styled'

interface StatItem {
  label: string
  value: string
}

interface AdminStaticPageProps {
  title: string
  description: string
  breadcrumbItems?: Array<{ title: React.ReactNode; path?: string; search?: any }>
  stats?: StatItem[]
  children?: ReactNode
}

export default function AdminStaticPage({
  title,
  description,
  breadcrumbItems,
  stats,
  children,
}: AdminStaticPageProps) {
  return (
    <PageLayout>
      <PageContainer
        breadcrumbItems={breadcrumbItems ?? [{ title: 'Quản trị' }, { title }]}
      >
        <PageSurface>
          <Hero>
            <div>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </div>
          </Hero>

          {stats && stats.length > 0 && (
            <StatGrid>
              {stats.map((item) => (
                <StatCard key={item.label}>
                  <StatValue>{item.value}</StatValue>
                  <StatLabel>{item.label}</StatLabel>
                </StatCard>
              ))}
            </StatGrid>
          )}

          <Body>{children}</Body>
        </PageSurface>
      </PageContainer>
    </PageLayout>
  )
}
