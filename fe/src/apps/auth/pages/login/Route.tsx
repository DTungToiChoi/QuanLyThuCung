import { createRoute } from '@tanstack/react-router'
import authdRoute from '../../Route'
import LoginPage from './LoginPage'
import { LOGIN_ROUTE } from '../../constant'

export const loginRoute = createRoute({
  getParentRoute: () => authdRoute,
  path: LOGIN_ROUTE,
  component: LoginPage, 
})