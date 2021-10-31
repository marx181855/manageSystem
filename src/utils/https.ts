import axios, {AxiosInstance, AxiosRequestConfig } from "axios";

interface ResponseResult<T> {
  data: T;
  code: number;
  msg: string
}

type RequestMethod = 'GET' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'POST' | 'PUT' | 'PATCH';

// 泛型T是api返回的data数据结构
async function request<T>(url: string, params: unknown, method: RequestMethod = 'POST', contentType = false): Promise<ResponseResult<T>> {
  const instance: AxiosInstance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  });

  instance.interceptors.request.use((config) => {
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  instance.interceptors.response.use((response) => {
    // 这里返回的response会直接影响下面instance(config)的返回值，所以这里不要动他，直接返回response即可
    return response;
  }, (err) => {
    return Promise.reject(err);
  });

  const header: any = {};
  header['content-type'] = contentType ? 'application/x-www-form-urlencoded' : 'application/json;charset=UTF-8';
  header['access-token'] = 'fMNAVqXLPiUaoUCplnNJMZSEiTvVYxJA';

  const config: AxiosRequestConfig = {
    url,
    method,
    headers: header,
    responseType: 'json'
  };

  if (method === 'GET') {
    config.params = params;
  } else {
    config.data = params;
  }
  return  (await instance(config)).data;
}

export default request;
