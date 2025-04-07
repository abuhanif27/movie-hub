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

const useMovies = () => useData<Movie>("/discover/movie", "results");
export default useMovies;
