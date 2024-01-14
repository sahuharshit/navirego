import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { BASE_URL } from "../../../constants/endpoint";
import { LetterData } from "../../interfaces/responseInterface";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<LetterData>) => response,
  (error: AxiosError) => {
    if (error.response && error.response.data) {
      console.log(error);
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
  }
);

class FetchUtilsClass {
  getRequest = async (url: string) => {
    return axiosInstance.get(url);
  };
  postRequest = async (url: string, data: any) => {
    return axiosInstance.post(url, data);
  };
}

const FetchUtils = new FetchUtilsClass();
export { FetchUtils };
