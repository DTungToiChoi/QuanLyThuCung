import { createRoute } from '@tanstack/react-router'
import staffRoute from '../../Route'
import { THANH_TOAN_NHAN_VIEN_ROUTE } from '../../constants'
import ThanhToanPage from './ThanhToanPage.tsx'

export const thanhToanNhanVienRoute = createRoute({
  getParentRoute: () => staffRoute,
  path: THANH_TOAN_NHAN_VIEN_ROUTE,
  component: ThanhToanPage,
})
