import api from '@configs/axios'
import type { IResponse } from '../types/response.type'

export type LoginPayload = {
  username: string
  password: string
}

export type LoginResponse = {
  username: string
  roles: string[]
  accessToken: string
  accessExpiresAt: string
  refreshToken: string
  refreshExpiresAt: string
}

export const authApi = {
  login: async (payload: LoginPayload): Promise<IResponse<LoginResponse>> => {
    const response = await api.post<IResponse<LoginResponse>>('/auth/login', payload)
    return response.data
  },
}
