import axios from "axios";

let BASE_URL = "https://api.escuelajs.co/api/v1/products"
export const axiosInstance = axios.create({
    baseURL : BASE_URL,
})

