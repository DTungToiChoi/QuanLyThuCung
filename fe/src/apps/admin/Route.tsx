import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { ADMIN_ROUTE } from './constants'
import { quanLyNhanVienRoute } from './pages/quan-ly-nhan-vien/Route'
import { tongQuanAdminRoute } from './pages/tong-quan/Route'
import { lichHenRoute } from './pages/lich-hen/Route'
import { dichVuRoute } from './pages/dich-vu/Route'
import { khachHangVipRoute } from './pages/khach-hang-vip/Route'
import { khoHangRoute } from './pages/kho-hang/Route'

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ADMIN_ROUTE,
  component: () => <Outlet />,
})

adminRoute.addChildren([
  tongQuanAdminRoute,
  quanLyNhanVienRoute,
  lichHenRoute,
  dichVuRoute,
  khachHangVipRoute,
  khoHangRoute,
])

export default adminRoute
