import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
// import useGenres from "../hooks/useGenres";

function MovieGrid() {
  const { errorMessage, movies } = useMovies();
  // const { genres, genreErrorMessage } = useGenres();

  return (
    <>
      {errorMessage && <Text>{errorMessage}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MovieGrid;
