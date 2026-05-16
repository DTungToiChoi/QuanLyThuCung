import { createRoute } from '@tanstack/react-router'
import adminRoute from '../../Route'
import { KHACH_HANG_VIP_ROUTE } from '../../constants'
import KhachHangVipPage from './KhachHangVipPage.tsx'

export const khachHangVipRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: KHACH_HANG_VIP_ROUTE,
  component: KhachHangVipPage,
})
