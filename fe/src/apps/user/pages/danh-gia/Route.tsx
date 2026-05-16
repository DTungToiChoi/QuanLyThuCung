import { createRoute } from '@tanstack/react-router'
import userRoute from '../../Route'
import { DANH_GIA_KHACH_HANG_ROUTE } from '../../constants'
import DanhGiaPage from './DanhGiaPage'

export const danhGiaUserRoute = createRoute({
  getParentRoute: () => userRoute,
  path: DANH_GIA_KHACH_HANG_ROUTE,
  component: DanhGiaPage,
})

export default danhGiaUserRoute
