import { createRoute } from '@tanstack/react-router'
import adminRoute from '../../Route'
import { LICH_HEN_ROUTE } from '../../constants'
import LichHenPage from './LichHenPage.tsx'

export const lichHenRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: LICH_HEN_ROUTE,
  component: LichHenPage,
})
