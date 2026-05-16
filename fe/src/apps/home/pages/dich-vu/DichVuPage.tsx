import { useMemo, useState } from 'react'
import MainLayout from '../../component/MainLayout'
import { Page } from '../../component/page-styled'
import { HomeGlobalStyle } from '../../styles/theme'
import { useDichVuQuery, type TFilter } from '../../services'
import DichVuFeatures from './components/DichVuFeatures'
import DichVuHero from './components/DichVuHero'
import DichVuList from './components/DichVuList'

export default function DichVuPage() {
  const [page] = useState(1)
  const [pageSize] = useState(6)
  const filter = useMemo<TFilter>(() => ({ page, pageSize }), [page, pageSize])
  const { data: apiRes, isLoading } = useDichVuQuery(filter)

  return (
    <MainLayout>
      <HomeGlobalStyle />
      <Page>
        <DichVuHero />
        <DichVuList
          data={apiRes?.data ?? []}
          isLoading={isLoading}
          metaData={apiRes?.metaData}
          page={page}
        />
        <DichVuFeatures />
      </Page>
    </MainLayout>
  )
}
