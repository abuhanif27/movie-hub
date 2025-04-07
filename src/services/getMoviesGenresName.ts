import { Genre } from "../hooks/useGenres";
import { Movie } from "../hooks/useMovies";

const getMoviesGenresNames = (movie: Movie, genres: Genre[]) =>
  movie.genre_ids
    .map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean)
    .join(", ");

export default getMoviesGenresNames;
