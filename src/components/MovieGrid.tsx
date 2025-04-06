import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";
import { Text } from "@chakra-ui/react";

interface Movie {
  id: number;
  title: string;
}

interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

function MovieGrid() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchMoviesResponse>("/discover/movie")
      .then((res) => setMovies(res.data.results))
      .catch((err: AxiosError) => setErrorMessage(err.message));
  }, []);
  return (
    <>
      {errorMessage && <Text>{errorMessage}</Text>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieGrid;
