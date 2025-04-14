import { MovieQuery } from "../App";
import useData from "./useData";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_count: number;
  vote_average: number;
}

const useMovies = (movieQuery: MovieQuery) =>
  useData<Movie>(
    "/discover/movie",
    "results",
    {
      params: {
        with_genres: movieQuery.genre?.id,
        sort_by: movieQuery.sortBy,
        include_adult: false,
      },
    },
    [movieQuery]
  );
export default useMovies;
