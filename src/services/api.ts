import axios, { type AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {},
  params: { key: "f945284a3321472d8ceab7394d8edd82" },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return api
      .get<PaginationResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return api.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default APIClient;

export interface PaginationResponse<T> {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
}
