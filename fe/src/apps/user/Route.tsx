import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { USER_ROUTE } from './constants'
import { hoSoThuCungUserRoute } from './pages/ho-so-thu-cung/Route'
import { datLichUserRoute } from './pages/dat-lich/Route'
import { lichSuUserRoute } from './pages/lich-su/Route'
import { tichDiemUserRoute } from './pages/tich-diem/Route'
import { danhGiaUserRoute } from './pages/danh-gia/Route'

export const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: USER_ROUTE,
  component: () => <Outlet />,
})

userRoute.addChildren([
  hoSoThuCungUserRoute,
  datLichUserRoute,
  lichSuUserRoute,
  tichDiemUserRoute,
  danhGiaUserRoute,
])

export default userRoute
