import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  genres: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genre/movie/list", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenres(res.data.genres);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrorMessage(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, errorMessage, isLoading };
};

export default useGenres;
