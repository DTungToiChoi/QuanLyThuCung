import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { ADMIN_ROUTE } from './constants'
import { quanLyNhanVienRoute } from './pages/quan-ly-nhan-vien/Route'

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ADMIN_ROUTE,
  component: () => <Outlet />,
})

adminRoute.addChildren([quanLyNhanVienRoute])

export default adminRoute
