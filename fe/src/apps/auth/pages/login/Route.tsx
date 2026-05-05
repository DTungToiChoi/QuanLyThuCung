import { createRoute } from '@tanstack/react-router'
import authdRoute from '../../Route'
import LoginPage from './LoginPage'

export const loginRoute = createRoute({
  getParentRoute: () => authdRoute,
  path: '/login-admin',
  component: LoginPage, 
})