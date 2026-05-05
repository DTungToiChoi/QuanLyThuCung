import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "../../Route";
import { loginRoute } from "./pages/login/Route";

export const authdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: () => <Outlet />
});

authdRoute.addChildren([loginRoute]);

export default authdRoute;
