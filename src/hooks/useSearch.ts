import { MovieQuery } from "../App";
import useData from "./useData";
import { Movie } from "./useMovies";

const useSearch = (movieQuery: MovieQuery) =>
  useData<Movie>(
    "/search/movie",
    "results",
    {
      params: {
        query: movieQuery.searchText,
      },
    },
    [movieQuery.searchText]
  );

export default useSearch;
