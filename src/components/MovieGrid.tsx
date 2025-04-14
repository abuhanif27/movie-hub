import { SimpleGrid, Text, Center, Box, Icon } from "@chakra-ui/react";
import { MovieQuery } from "../App";
import useMovies from "../hooks/useMovies";
import useSearch from "../hooks/useSearch";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import { MdMovieFilter } from "react-icons/md";
import { ComponentType } from "react";

interface Props {
  movieQuery: MovieQuery;
}

function MovieGrid({ movieQuery }: Props) {
  // Use search or discover based on searchText
  const { data, errorMessage, isLoading } = movieQuery.searchText
    ? useSearch(movieQuery)
    : useMovies(movieQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Show if no movies found
  if (!isLoading && !errorMessage && data.length === 0) {
    return (
      <Center height="60vh">
        <Box textAlign="center" color="gray.500">
          <Icon as={MdMovieFilter as ComponentType} boxSize={12} mb={4} />
          <Text fontSize="2xl" fontWeight="bold">
            No movies found
          </Text>
          <Text fontSize="md">
            Try searching for something else or clear your filters.
          </Text>
        </Box>
      </Center>
    );
  }

  if (errorMessage) return <Text color="red.500">{errorMessage}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading
        ? skeletons.map((skeleton) => (
            <MovieCardContainer key={skeleton}>
              <MovieCardSkeleton />
            </MovieCardContainer>
          ))
        : data.map((movie) => (
            <MovieCardContainer key={movie.id}>
              <MovieCard movie={movie} />
            </MovieCardContainer>
          ))}
    </SimpleGrid>
  );
}

export default MovieGrid;
