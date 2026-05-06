import {
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import authdRoute from './apps/auth/Route'
import adminRoute from './apps/admin/Route'
import { rootRoute } from './rootRoute'
import { NHAN_VIEN_HOME } from './shared/constants'
import homeRoute from './apps/home/Route'

export const nhanVienHomeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: NHAN_VIEN_HOME,
  component: () => <div>Trang nhân viên</div>,
})

// ================= ROUTE TREE =================
export const routeTree = rootRoute.addChildren([authdRoute, adminRoute, nhanVienHomeRoute, homeRoute])

// ================= ROUTER =================
const router = createRouter({
  routeTree,
})

export default router
