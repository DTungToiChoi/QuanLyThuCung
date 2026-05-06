import type { IBaseFilter } from "../../../../../shared/types";

export interface IDichVu {
  id: number;
  tenDichVu: string;
  moTaDichVu: string;
  giaDichVu: string;
  hinhAnhUrl: string;
  hoatDong: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TFilter = { Query?: object; } & IBaseFilter