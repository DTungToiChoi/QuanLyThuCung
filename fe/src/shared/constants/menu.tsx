import type { MenuProps } from "antd";
import {
  DashboardOutlined,
  ApartmentOutlined,
  PieChartOutlined,
  SafetyOutlined,
  ToolOutlined,
  HomeOutlined,
  MessageOutlined,
  FileTextOutlined,
  ProjectOutlined,
  TeamOutlined,
  LineChartOutlined,
  BankOutlined,
} from "@ant-design/icons";

import {
  AN_TOAN_KY_THUAT,
  DANH_MUC_VA_BIEU_PHI,
  GIAM_SAT_NO_CONG_VI_PHAM,
  NOI_QUY_VI_PHAM,
  QUAN_LY_PHI_DICH_VU,
  TAI_SAN_CO_SO_VAT_CHAT,
  THEO_DOI_THU_TIEN_THUE,
  TIEP_NHAN_XU_LY_PHAN_ANH,
  TONG_QUAN_SO_DO_CHO,
  THIET_LAP_CAU_HINH, 
  BC_TAI_CHINH,
  BC_HOP_DONG,
  BC_TIEU_THUONG,
  BC_VAN_HANH,
  BC_CO_QUAN_NHA_NUOC,
} from "@/apps/ban-quan-ly/constants";

export type MenuItem = NonNullable<MenuProps["items"]>[number];

export const bqlMenuItems: MenuItem[] = [
  {
    key: "tong-quan-so-do",
    icon: <DashboardOutlined />,
    label: "TỔNG QUAN & SƠ ĐỒ",
    children: [
      {
        key: TONG_QUAN_SO_DO_CHO,
        icon: <ApartmentOutlined />, 
        label: "Sơ đồ chợ trực quan",
      },
      {
        key: THIET_LAP_CAU_HINH,
        icon: <PieChartOutlined />, 
        label: "Thiết lập cấu hình",
      },
    ],
  },
  {
    key: "quan-ly-tai-chinh",
    icon: <PieChartOutlined />, 
    label: "TÀI CHÍNH & CÔNG NỢ",
    children: [
      {
        key: DANH_MUC_VA_BIEU_PHI,
        icon: <ApartmentOutlined />, 
        label: "Danh mục & Biểu phí",
      },
      {
        key: THEO_DOI_THU_TIEN_THUE,
        icon: <DashboardOutlined />, 
        label: "Theo dõi thu tiền thuê",
      },
      {
        key: QUAN_LY_PHI_DICH_VU,
        icon: <ToolOutlined />, 
        label: "Quản lý phí dịch vụ",
      },
      {
        key: GIAM_SAT_NO_CONG_VI_PHAM,
        icon: <SafetyOutlined />, 
        label: "Giám sát nợ & Vi phạm",
      },
    ],
  },
  {
    key: "van-hanh-noi-quy",
    icon: <SafetyOutlined />, 
    label: "VẬN HÀNH & NỘI QUY",
    children: [
      {
        key: NOI_QUY_VI_PHAM,
        icon: <SafetyOutlined />, 
        label: "Nội quy & Vi phạm",
      },
      {
        key: AN_TOAN_KY_THUAT,
        icon: <ToolOutlined />, 
        label: "An toàn & Kỹ thuật",
      },
      {
        key: TAI_SAN_CO_SO_VAT_CHAT,
        icon: <HomeOutlined />, 
        label: "Tài sản & Cơ sở vật chất",
      },
      {
        key: TIEP_NHAN_XU_LY_PHAN_ANH,
        icon: <MessageOutlined />, 
        label: "Xử lý phản ánh",
      },
    ],
  },
  {
    key: "bao-cao",
    icon: <FileTextOutlined />,
    label: "HỆ THỐNG BÁO CÁO",
    children: [
      {
        key: BC_TAI_CHINH,
        icon: <LineChartOutlined />,
        label: "Báo cáo Tài chính",
      },
      {
        key: BC_HOP_DONG,
        icon: <ProjectOutlined />,
        label: "Báo cáo Hợp đồng",
      },
      {
        key: BC_TIEU_THUONG,
        icon: <TeamOutlined />,
        label: "Báo cáo Tiểu thương",
      },
      {
        key: BC_VAN_HANH,
        icon: <ToolOutlined />,
        label: "Báo cáo Vận hành",
      },
      {
        key: BC_CO_QUAN_NHA_NUOC,
        icon: <BankOutlined />,
        label: "Báo cáo CQ Nhà nước",
      },
    ],
  },
];