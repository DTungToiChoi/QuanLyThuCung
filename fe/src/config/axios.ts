import axios from 'axios';
import { notification } from 'antd';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import type { IResponse } from '../shared/types/response.type';
import tokenManager from '@utils/tokenManager';
import { handleRefreshToken } from '@utils/refreshToken';
import { lcStorage } from '@utils/storage';
import { LOCAL_STORAGE_KEYS } from '@constants/storageKeys';
import { LANGUAGE_REQUEST } from '@constants/index';


export interface IOriginRequest extends AxiosRequestConfig { _retry: boolean; }

const handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const lang: string = lcStorage.get(LOCAL_STORAGE_KEYS.language) || 'vi'
  const langCode = LANGUAGE_REQUEST[lang];
  //check token
  const accessToken = tokenManager.getAccessToken();
  if (accessToken && config.headers) {
    config.headers['Authorization'] = 'Bearer ' + accessToken;
  }
  if (config.headers) config.headers['ngonngu'] = langCode;
  config.validateStatus = function (status) {
    return (status >= 200 && status < 300) || status === 404; // default
  };
  return config;
};

const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  //Trả thẳng về data trong trường hợp là phương thức là GET
  return response.data;
};

const handleResponseError = async (error: AxiosError<IResponse<any>>) => {
  console.log('Request error: ', { error });

  const originalRequest = error.config as IOriginRequest;

  //handle refresh token
  if (error.response?.status === 401 && !originalRequest._retry) {
    return handleRefreshToken(originalRequest);
  }

  //internal server error
  if (error.response?.status === 500) {
    notification.error({
      message: 'Thất bại!',
      description: 'Đã có lỗi xảy ra',
    });
    return Promise.reject(error.response);
  }

  //show message error
  if (error.response?.status !== 404 && error.response?.status !== 403) {
    notification.error({
      message: 'Thất bại!',
      description: error.response?.data?.message || error.message,
    });
  }

  return Promise.reject(error.response);
};

//configs nối DichVuCong
const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//configs nối news
const axiosNewsClient = axios.create({
  baseURL: import.meta.env.VITE_ARTICLE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

//Client nối với Tin Tức 
axiosNewsClient.interceptors.request.use(handleRequest as any, handleRequestError);
axiosNewsClient.interceptors.response.use(handleResponse, handleResponseError);

// Client nối với DichVuCong
axiosClient.interceptors.request.use(handleRequest as any, handleRequestError);
axiosClient.interceptors.response.use(handleResponse, handleResponseError);

export default axiosClient;
export { axiosClient, axiosNewsClient };
