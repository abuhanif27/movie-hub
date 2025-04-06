import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const useGames = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
      })
      .then((res) => setMovies(res.data.results))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
      });

    return () => controller.abort();
  }, []);

  return { movies, errorMessage };
};
export default useGames;
