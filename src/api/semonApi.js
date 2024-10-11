import axios from "axios";
import { getEnvVariables } from "../helpers"

const { VITE_API_URL } = getEnvVariables();


const semonApi = axios.create({
    baseURL: VITE_API_URL
});


// Todo: configurar interceptores 
semonApi.interceptors.request.use(config => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers['x-token'] = token; // O reemplazar por token real
    }
    return config;
});





export default semonApi;