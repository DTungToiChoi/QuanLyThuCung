import { createRoute } from "@tanstack/react-router";
import adminRoute from "../../Route";
import { QUAN_LY_NHAN_VIEN_ROUTE } from "../../constants";
import NhanVienPage from "./NhanVienPage";

export const quanLyNhanVienRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: QUAN_LY_NHAN_VIEN_ROUTE,
  component: NhanVienPage,
})
