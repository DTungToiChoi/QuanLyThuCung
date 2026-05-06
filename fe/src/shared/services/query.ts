

import { getMenuUser, getUserInfo, getDsQuyenUser } from "@/shared/services/api";
import type { IUser, MenuItem } from "@/shared/services/type";
import type { IQueryParams } from "@/shared/types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

/**
 * @query
 * @description Lấy thông tin người dùng
 */
export const useGetUserInfo = ({
  options,
}: IQueryParams = {}): UseQueryResult<IUser | undefined> => {
  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: getUserInfo,
    ...options,
  });
};
// lấy menu app
export const useMenuUser = ({ options }: IQueryParams = {}): UseQueryResult<
  MenuItem[]
> => {
  return useQuery({
    queryKey: ["menuUser"],
    queryFn: getMenuUser,
    ...options,
  });
};

export const quyenUserQueryKey = "quyen-user";
export const useQuyenUserQuery = ({ options }: IQueryParams = {}) => {
  return useQuery({
    queryKey: [quyenUserQueryKey],
    queryFn: getDsQuyenUser,
    ...options,
  });
};
