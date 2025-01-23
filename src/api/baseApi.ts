import { notification } from "antd";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import qs from "qs";
import RootStore from "../store/rootStore";

export default class BaseApi {
  protected api: AxiosInstance;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.api = axios.create({
      timeout: 30 * 1000,
      paramsSerializer: (p) => qs.stringify(p, { arrayFormat: "brackets" }),
    });
  }

  get baseUrl() {
    return "https://dummyjson.com/";
  }

  request({ path, ...params }: AxiosRequestConfig & { path: string }) {
    return this.api(path, {
      ...params,
      headers: params.headers,
    })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  }

  fetchData = (path: string) => {
    return this.request({
      baseURL: this.baseUrl,
      path,
      method: "get",
    });
  };

  postData = <T>(path: string, data: T) => {
    return this.request({
      baseURL: this.baseUrl,
      path,
      method: "post",
      data,
    });
  };

  handleRequestError() {
    notification.error({
      message: "Ошибка запроса к серверу",
    });
  }
}
