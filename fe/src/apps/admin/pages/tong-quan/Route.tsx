import { createRoute } from '@tanstack/react-router'
import adminRoute from '../../Route'
import { TONG_QUAN_ADMIN_ROUTE } from '../../constants'
import TongQuanAdminPage from './TongQuanAdminPage'

export const tongQuanAdminRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: TONG_QUAN_ADMIN_ROUTE,
  component: TongQuanAdminPage,
})
