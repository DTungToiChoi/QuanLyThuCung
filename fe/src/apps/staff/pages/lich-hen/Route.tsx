import { createRoute } from '@tanstack/react-router'
import staffRoute from '../../Route'
import { LICH_HEN_NHAN_VIEN_ROUTE } from '../../constants'
import LichHenPage from './LichHenPage.tsx'

export const lichHenNhanVienRoute = createRoute({
  getParentRoute: () => staffRoute,
  path: LICH_HEN_NHAN_VIEN_ROUTE,
  component: LichHenPage,
})
