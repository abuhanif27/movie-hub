import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [genreErrorMessage, setGenreErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("/genre/movie/list", { signal: controller.signal })
      .then((res) => setGenres(res.data.genres))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setGenreErrorMessage(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, genreErrorMessage };
};

export default useGenres;
