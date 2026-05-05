import api from '../../lib/axios'

export type LoginPayload = {
  username: string
  password: string
}

export type LoginData = {
  username: string
  roles: string[]
  accessToken: string
  accessExpiresAt: string
  refreshToken?: string
  refreshExpiresAt?: string
}

export type LoginResponse = {
  code: number
  success: boolean
  message: string
  data: LoginData
}

export const authApi = {
  async login(payload: LoginPayload) {
    const response = await api.post<LoginResponse>('auth/login', payload)
    return response.data
  },
}
