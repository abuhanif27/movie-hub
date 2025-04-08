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

const useMovies = (selectedGenre: Genre | null) =>
  useData<Movie>(
    "/discover/movie",
    "results",
    { params: { with_genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
export default useMovies;
