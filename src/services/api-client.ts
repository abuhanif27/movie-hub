import axios, { AxiosError, CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2Q0Mzg0MTc4YWJjOThhYTdmZWVjNjFlM2FjODAxYyIsIm5iZiI6MTc0Mzc3MzE4MS42ODQsInN1YiI6IjY3ZWZkZGZkYTkzMTNjNzE4NGFkMTY1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i-U1xkhpmRe7z94bBekDjeyzs0wlNKjB7fSsWXsquzk",
    Accept: "application/json",
  },
});

export default apiClient;
export { AxiosError, CanceledError };
