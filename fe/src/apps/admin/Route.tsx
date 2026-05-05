import { createRoute, Outlet } from '@tanstack/react-router'
import { rootRoute } from '../../Route'
import { ADMIN_ROUTE } from './constants'

export const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ADMIN_ROUTE, 
  component: () => <Outlet />,
})

adminRoute.addChildren([])

export default adminRoute