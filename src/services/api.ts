import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  headers: {},
  params: {'key': 'f945284a3321472d8ceab7394d8edd82'},
});


export interface PaginationResponse<T> {
  count: number;
  results: T[];
}
