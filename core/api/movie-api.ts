import axios from "axios";
const token = process.env.EXPO_PUBLIC_MOVIE_DB_TOKEN;

const movieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MOVIE_DB_URL,
  params: {
    lenguage: "es-MX",
    api_key: process.env.EXPO_PUBLIC_MOVIE_DB_API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

//* Interceptors
movieApi.interceptors.request.use(async (config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { movieApi };
