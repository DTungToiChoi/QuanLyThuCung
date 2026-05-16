import { createRoute } from '@tanstack/react-router'
import userRoute from '../../Route'
import { DAT_LICH_KHACH_HANG_ROUTE } from '../../constants'
import DatLichPage from './DatLichPage'

export const datLichUserRoute = createRoute({
  getParentRoute: () => userRoute,
  path: DAT_LICH_KHACH_HANG_ROUTE,
  component: DatLichPage,
})

export default datLichUserRoute
