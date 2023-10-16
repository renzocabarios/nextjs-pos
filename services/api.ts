import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "http://localhost:9000/api/v1/";

const AXIOS_INSTANCE: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

export async function get(uri: string) {
  return await AXIOS_INSTANCE.get(uri);
}

export async function post(uri: string, body: any) {
  return await AXIOS_INSTANCE.post(uri, body);
}
