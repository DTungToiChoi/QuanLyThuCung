import { createRoute } from '@tanstack/react-router'
import homeRoute from '../../Route'
import { DICH_VU_ROUTE } from '../../constants'
import DichVuPage from './DichVuPage'

export const dichVuRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: DICH_VU_ROUTE,
  component: DichVuPage,
})

export default dichVuRoute
