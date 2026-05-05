// src/lib/axios.ts
import axios from 'axios'
import { ENV } from '../config/env'

const api = axios.create({
  baseURL: ENV.API_URL,
})

// request: gắn token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// response: handle lỗi
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // TODO: refresh token sau
      localStorage.removeItem('accessToken')
    }
    return Promise.reject(error)
  }
)

export default api