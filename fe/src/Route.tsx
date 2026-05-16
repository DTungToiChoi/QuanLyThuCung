import {
  createRouter,
} from '@tanstack/react-router'
import authdRoute from './apps/auth/Route'
import adminRoute from './apps/admin/Route'
import staffRoute from './apps/staff/Route'
import userRoute from './apps/user/Route'
import { rootRoute } from './rootRoute'
import homeRoute from './apps/home/Route'

// ================= ROUTE TREE =================
export const routeTree = rootRoute.addChildren([authdRoute, adminRoute, staffRoute, userRoute, homeRoute])

// ================= ROUTER =================
const router = createRouter({
  routeTree,
})

export default router
