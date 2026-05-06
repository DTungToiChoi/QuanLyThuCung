import { createRoute } from '@tanstack/react-router'
import homeRoute from '../../Route'
import { TRA_CUU_ROUTE } from '../../constants'
import TraCuuPage from './TraCuuPage'

export const traCuuRoute = createRoute({
  getParentRoute: () => homeRoute,
  path: TRA_CUU_ROUTE,
  component: TraCuuPage,
})

export default traCuuRoute
