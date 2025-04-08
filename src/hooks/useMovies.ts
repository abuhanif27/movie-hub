import useData from "./useData";
import { Genre } from "./useGenres";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_count: number;
  vote_average: number;
}

const useMovies = (selectedGenre: Genre | null, sortBy: string) =>
  useData<Movie>(
    "/discover/movie",
    "results",
    {
      params: {
        with_genres: selectedGenre?.id,
        sort_by: sortBy,
      },
    },
    [selectedGenre?.id, sortBy]
  );
export default useMovies;
