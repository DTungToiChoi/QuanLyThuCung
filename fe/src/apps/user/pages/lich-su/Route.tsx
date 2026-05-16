import { createRoute } from '@tanstack/react-router'
import userRoute from '../../Route'
import { LICHSU_KHACH_HANG_ROUTE } from '../../constants'
import LichSuPage from './LichSuPage'

export const lichSuUserRoute = createRoute({
  getParentRoute: () => userRoute,
  path: LICHSU_KHACH_HANG_ROUTE,
  component: LichSuPage,
})

export default lichSuUserRoute
