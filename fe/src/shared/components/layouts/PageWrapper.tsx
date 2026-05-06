import React from 'react';
import { PageContainer, PageLayout } from './index';

interface PageWrapperProps {
  title?: string;
  extra?: React.ReactNode;
  children: React.ReactNode;
  breadcrumbItems?: Array<{ title: React.ReactNode; path?: string }>;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ 
  title, 
  extra, 
  children, 
  breadcrumbItems = [] 
}) => {
  return (
    <PageLayout>
      <PageContainer 
        breadcrumbItems={breadcrumbItems.length > 0 ? breadcrumbItems : (title ? [{ title }] : [])}
      >
        <div style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            {title && <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 600 }}>{title}</h2>}
            {extra && <div>{extra}</div>}
          </div>
          {children}
        </div>
      </PageContainer>
    </PageLayout>
  );
};
