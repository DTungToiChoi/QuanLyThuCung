import axios from "axios"
import tokenManager from "../utils/tokenManager"

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
})

axiosClient.interceptors.request.use((config) => {
  const token = tokenManager.getAccessToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      tokenManager.removeAllToken()
    }

    return Promise.reject(error)
  }
)

export default axiosClient
