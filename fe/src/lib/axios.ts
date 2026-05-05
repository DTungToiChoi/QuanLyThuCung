import axios from 'axios'
import { ENV } from '../config/env'
import { tokenManager } from '../shared/tokenManager'

const api = axios.create({
  baseURL: ENV.API_URL,
})

api.interceptors.request.use((config) => {
  const token = tokenManager.getAccessToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      // TODO: add refresh token flow later.
      tokenManager.clearTokens()
    }

    return Promise.reject(error)
  }
)

export default api
