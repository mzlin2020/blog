import axios from "axios";

interface FcResponse<T> {
  code: string;
  msg: string;
  data: T;
}
type Fn = (data: FcResponse<any>) => unknown;

interface AnyObj {
  [index: string]: unknown;
}

const instance = axios.create({
  baseURL: "http://localhost:7777",
  timeout: 5000,
});

const Get = <T>(url: string, params: AnyObj = {}, clearFn?: Fn): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    instance
      .get(url, params)
      .then((result) => {
        let res: FcResponse<T>;
        if (clearFn !== undefined) {
          res = clearFn(result.data) as unknown as FcResponse<T>;
        } else {
          res = result.data as FcResponse<T>;
        }
        resolve([null, res as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

const Post = <T>(url: string, data?: AnyObj, params: AnyObj = {}): Promise<[any, FcResponse<T> | undefined]> => {
  return new Promise((resolve) => {
    instance
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};

// 请求拦截
instance.interceptors.request.use((config) => {
  return config;
});

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);

export { Get, Post };
