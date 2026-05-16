import { createRoute } from '@tanstack/react-router'
import staffRoute from '../../Route'
import { HO_SO_THUC_CUNG_ROUTE } from '../../constants'
import HoSoThuCungPage from './HoSoThuCungPage.tsx'

export const hoSoThuCungRoute = createRoute({
  getParentRoute: () => staffRoute,
  path: HO_SO_THUC_CUNG_ROUTE,
  component: HoSoThuCungPage,
})
