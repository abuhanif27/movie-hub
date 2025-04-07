import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
// import useGenres from "../hooks/useGenres";

function MovieGrid() {
  const { errorMessage, movies, isLoading } = useMovies();
  // const { genres, genreErrorMessage } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {errorMessage && <Text>{errorMessage}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default MovieGrid;
