import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { HOME_ROUTE } from './constants'
import datLichRoute from './pages/dat-lich/Route'
import dichVuRoute from './pages/dich-vu/Route'
import trangChuRoute from './pages/trang-chu/Route'
import traCuuRoute from './pages/tra-cuu/Route'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: HOME_ROUTE,
  component: () => <Outlet />,
})

homeRoute.addChildren([trangChuRoute, dichVuRoute, datLichRoute, traCuuRoute])

export default homeRoute
