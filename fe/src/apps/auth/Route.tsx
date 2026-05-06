import { createRoute, Outlet } from "@tanstack/react-router";
import { rootRoute } from "../../rootRoute";
import { loginRoute } from "./pages/login/Route";
import { AUTH_ROUTE } from "./constant";

export const authdRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: AUTH_ROUTE,
  component: () => <Outlet />
});

authdRoute.addChildren([loginRoute]);

export default authdRoute;
