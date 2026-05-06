export interface IDichVu {
  id: number
  tenDichVu: string
  moTaDichVu: string | null
  giaDichVu: string
  hinhAnhUrl: string | null
  hoatDong: boolean
  createdAt: string
  updatedAt: string
}

export type TFilter = {
  Keyword?: string
  Page?: number
  PageSize?: number
  'Query.TenDichVu'?: string
}
