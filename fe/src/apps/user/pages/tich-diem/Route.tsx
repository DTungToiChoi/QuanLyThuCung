import { createRoute } from '@tanstack/react-router'
import userRoute from '../../Route'
import { TICH_DIEUM_KHACH_HANG_ROUTE } from '../../constants'
import TichDiemPage from './TichDiemPage'

export const tichDiemUserRoute = createRoute({
  getParentRoute: () => userRoute,
  path: TICH_DIEUM_KHACH_HANG_ROUTE,
  component: TichDiemPage,
})

export default tichDiemUserRoute
