import axios, { AxiosResponse } from "axios";

const getPosts = (): Promise<AxiosResponse> =>
  axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10`);

export default getPosts;
