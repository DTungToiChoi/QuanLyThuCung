import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { ADMIN_ROUTE, QUAN_LY_NHAN_VIEN_ROUTE } from './constants'

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ADMIN_ROUTE,
  component: () => <Outlet />,
})

export const quanLyNhanVienRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: QUAN_LY_NHAN_VIEN_ROUTE,
  component: () => <div>Quản lý nhân viên</div>,
})

adminRoute.addChildren([quanLyNhanVienRoute])

export default adminRoute
