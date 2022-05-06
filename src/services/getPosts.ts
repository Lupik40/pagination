import axios, { AxiosResponse } from "axios";

const getPosts = (page: number): Promise<AxiosResponse> =>
  axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );

export default getPosts;
