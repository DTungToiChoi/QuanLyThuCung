import {
  COMMON_ACCESS_DENIED,
  COMMON_INTERNAL_SERVER_ERROR,
  COMMON_MISSING_PARAM,
  COMMON_NOT_FOUND,
  COMMON_UNAUTHORIZED,
} from "@shared/constants";

export const useServerErrorMsg = () => {
  const ERROR_CODE_MSG = {
    //common
    [COMMON_UNAUTHORIZED]: "Chưa xác thực",
    [COMMON_ACCESS_DENIED]: "Chưa có quyền",
    [COMMON_NOT_FOUND]: "Không tìm thấy",
    [COMMON_INTERNAL_SERVER_ERROR]: "Lỗi server",
    [COMMON_MISSING_PARAM]: "Thiếu tham số",

    ["Admin_VungKinhTe_000"]: "Mã danh mục vùng kinh tế đã tồn tại",
    
  };

  return { ERROR_CODE_MSG };
};
export default useServerErrorMsg;
