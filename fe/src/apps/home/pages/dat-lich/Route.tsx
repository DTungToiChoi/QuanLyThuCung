import { createRoute } from '@tanstack/react-router'
import homeRoute from '../../Route'
import { DAT_LICH_ROUTE } from '../../constants'
import DatLichPage from './DatLichPage'

export const datLichRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: DAT_LICH_ROUTE,
  component: DatLichPage,
})

export default datLichRoute
