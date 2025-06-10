import axios from "axios";

const baseURL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : "http://localhost:9000/api";

const API = axios.create({
  baseURL,
  withCredentials: true,
});

export default API;