import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";

function MovieGrid() {
  const { errorMessage, movies, isLoading } = useMovies();
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
          skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))}
        {movies.map((movie) => (
          <MovieCardContainer key={movie.id}>
            <MovieCard movie={movie} />
          </MovieCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default MovieGrid;
