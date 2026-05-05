import { createRoute } from "@tanstack/react-router";
import adminRoute from "../../Route";
import { QUAN_LY_NHAN_VIEN_ROUTE } from "../../constants";

export const quanLyNhanVienRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: QUAN_LY_NHAN_VIEN_ROUTE,
  component: () => <div>Quản lý nhân viên</div>,
})