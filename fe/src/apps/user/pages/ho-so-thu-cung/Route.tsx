import { createRoute } from '@tanstack/react-router'
import userRoute from '../../Route'
import { HO_SO_THU_CUNG_KHACH_HANG_ROUTE } from '../../constants'
import HoSoThuCungPage from './HoSoThuCungPage'

export const hoSoThuCungUserRoute = createRoute({
  getParentRoute: () => userRoute,
  path: HO_SO_THU_CUNG_KHACH_HANG_ROUTE,
  component: HoSoThuCungPage,
})

export default hoSoThuCungUserRoute
