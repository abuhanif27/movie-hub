import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  // genre_ids: number[];
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

const MONTHS = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

const getMonths = (date: string) => {
  const month = date.split("-")[1];
  return MONTHS[month as keyof typeof MONTHS];
};

const getYear = (date: string) => date.split("-")[0];

const getDay = (date: string) => date.split("-")[2];

const getDate = (date: string) => {
  const year = getYear(date);
  const day = getDay(date);
  const month = getMonths(date);

  return `${month} ${day}, ${year}`;
};

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
export { getDate };
