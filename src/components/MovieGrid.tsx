import { Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";

function MovieGrid() {
  const { errorMessage, movies } = useMovies();
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
