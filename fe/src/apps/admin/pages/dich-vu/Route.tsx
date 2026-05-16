import { createRoute } from '@tanstack/react-router'
import adminRoute from '../../Route'
import { DICH_VU_ROUTE } from '../../constants'
import DichVuPage from './DichVuPage.tsx'

export const dichVuRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: DICH_VU_ROUTE,
  component: DichVuPage,
})
