import { createRoute } from '@tanstack/react-router'
import staffRoute from '../../Route'
import { TONG_QUAN_NHAN_VIEN_ROUTE } from '../../constants'
import StaffDashboardPage from './StaffDashboardPage.tsx'

export const tongQuanNhanVienRoute = createRoute({
  getParentRoute: () => staffRoute,
  path: TONG_QUAN_NHAN_VIEN_ROUTE,
  component: StaffDashboardPage,
})
