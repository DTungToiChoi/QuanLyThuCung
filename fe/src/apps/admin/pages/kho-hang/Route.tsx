import { createRoute } from '@tanstack/react-router'
import adminRoute from '../../Route'
import { KHO_HANG_ROUTE } from '../../constants'
import KhoHangPage from './KhoHangPage.tsx'

export const khoHangRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: KHO_HANG_ROUTE,
  component: KhoHangPage,
})
