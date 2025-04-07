import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_count: number;
  vote_average: number;
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchMoviesResponse>("/discover/movie", {
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, errorMessage, isLoading };
};
export default useGames;
