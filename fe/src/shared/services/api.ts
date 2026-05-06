import type { MenuItem, IRoleUser } from "@/shared/services/type";
import type { IResponse } from "@/shared/types/response.type";
import axiosClient from "@configs/axios";
import { objectToFormData, stringtifyQuery } from "@shared/utils";
import tokenManager from "@utils/tokenManager";

/** Lấy thông tin user */
export const getUserInfo = () => {
  const accessToken = tokenManager.getAccessToken();
  if (!accessToken) return;

  const url = "/v1/auth/user/info";
  return axiosClient.get(url);
};
/** Lấy menu user */
export const getMenuUser = async (): Promise<IResponse<MenuItem[]>> => {
  const res = await axiosClient.get<IResponse<MenuItem[]>>(
    "/Menu/lay-menu-theo-nguoi-dung"
  );
  return res.data;
};

/** Single Upload  File */
export const singleUploadFile = (payload: any): Promise<IResponse<string>> => {
  const url = "/UploadFile/single";
  return axiosClient.post(url, objectToFormData(payload), {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

/** Multi Upload File */
export const multiUploadFile = (payload: any): Promise<IResponse<string[]>> => {
  const url = "/UploadFile/multiple";
  return axiosClient.post(url, objectToFormData(payload), {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
/** Xóa file */
export const deleteFile = (payload: any): Promise<IResponse<boolean>> => {
  const params = stringtifyQuery(payload);
  const url = `/UploadFile?${params}`;
  return axiosClient.delete(url);
};
/** Download file bằng path */
export const downloadFile = (payload: { objectName: string }) => {
  const params = stringtifyQuery(payload);
  const url = `/UploadFile/download?${params}`;

  return axiosClient.get(url, {
    responseType: "arraybuffer", // QUAN TRỌNG
  });
};

export const exportDuThaoTemplate = (body:any) => {
  return axiosClient.post('/eform/hoso/duthao', body);
}

export const getDsQuyenUser = (): Promise<IResponse<IRoleUser>> => {
  return axiosClient.get(`/NhomQuyen/quyen-nguoi-dung`);
}