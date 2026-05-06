// import { useMutation } from 'react-query';
// import { createCoQuanQuanLy, deleteCoQuanQuanLy, editCoQuanQuanLy, editStatusCoQuanQuanLy } from "../services/api";
// import type { IAddCoQuanQuanLy, IEditParams, IEditStatusCoQuanQuanLy } from "../services/types";
// import type { IResponse } from "@/shared/types/response.type";

// export const useCreateCoQuanQuanLy = () => {
//   return useMutation<IResponse<boolean>, Error, IAddCoQuanQuanLy>({
//     mutationFn: (body: IAddCoQuanQuanLy) => createCoQuanQuanLy(body),
//   });
// };

// export const useEditCoQuanQuanLy = () => {
//   return useMutation<IResponse<boolean>, Error, IEditParams>({
//     mutationFn: ({ id, body }) => editCoQuanQuanLy(id, body),
//   });
// };

// export const useEditStatusCoQuanQuanLy = () => {
//   return useMutation<IResponse<boolean>, Error, { id: number; data: IEditStatusCoQuanQuanLy }>(
//     ({ id, data }) => editStatusCoQuanQuanLy(id, data)
//   );
// };

// export const useDeleteCoQuanQuanLy = () => {
//   return useMutation<IResponse<boolean>, Error, number>({
//     mutationFn: (id: number) => deleteCoQuanQuanLy(id),
//   });
// };