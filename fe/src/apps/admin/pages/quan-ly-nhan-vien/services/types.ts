import type { IBaseFilter } from '@/shared/types'

export type TaiKhoanRole = {
  name: string
}

export type ITaiKhoanNhanVien = {
  id: number
  username: string
  tenNhanVien: string | null
  email: string | null
  chucVu: 'QUAN_LY' | 'BAC_SI' | null
  roles: TaiKhoanRole[]
  createdAt: string
  updatedAt: string
}

export type TaiKhoanThongKe = {
  tongNhanVien: number
  tongVaiTro: number
}

export type TFilter = { Query?: object; } & IBaseFilter