import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { tongQuanNhanVienRoute } from './pages/tong-quan/Route'
import { lichHenNhanVienRoute } from './pages/lich-hen/Route'
import { hoSoThuCungRoute } from './pages/ho-so-thu-cung/Route'
import { thanhToanNhanVienRoute } from './pages/thanh-toan/Route'
import { STAFF_ROUTE } from './constants'

export const staffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: STAFF_ROUTE,
  component: () => <Outlet />,
})

staffRoute.addChildren([
  tongQuanNhanVienRoute,
  lichHenNhanVienRoute,
  hoSoThuCungRoute,
  thanhToanNhanVienRoute,
])

export default staffRoute
