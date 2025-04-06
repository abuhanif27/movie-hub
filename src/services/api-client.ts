import axios, { AxiosError, CanceledError } from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    Accept: "application/json",
  },
});

export default apiClient;
export { AxiosError, CanceledError };
