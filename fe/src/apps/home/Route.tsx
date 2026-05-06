import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../rootRoute'
import { HOME_ROUTE } from './constants'
import trangChuRoute from './pages/trang-chu/Route'

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: HOME_ROUTE,
  component: () => <Outlet />,
})

homeRoute.addChildren([trangChuRoute])

export default homeRoute
