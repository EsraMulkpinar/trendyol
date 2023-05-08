import axios from "axios";

export const instance = axios.create({
    baseURL:"http://localhost:8080/",
})

instance.interceptors.response.use((response) => {
  return response.data
})