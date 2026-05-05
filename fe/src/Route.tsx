import {
  Outlet,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import authdRoute from './apps/auth/Route'

// ================= ROOT =================
export const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// ================= ROUTE TREE =================
export const routeTree = rootRoute.addChildren([authdRoute])

// ================= ROUTER =================
const router = createRouter({
  routeTree,
})

export default router