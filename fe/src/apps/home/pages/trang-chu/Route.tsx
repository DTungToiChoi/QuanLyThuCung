import { createRoute } from '@tanstack/react-router'
import homeRoute from '../../Route'
import { TRANG_CHU_ROUTE } from '../../constants'
import TrangChuPage from './TrangChuPage'

export const trangChuRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: TRANG_CHU_ROUTE,
  component: TrangChuPage,
})

export default trangChuRoute
