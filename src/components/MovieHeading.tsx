import { Heading } from "@chakra-ui/react";
import { MovieQuery } from "../App";
import getSortByLabel from "../services/getSortByLabel";

interface Props {
  movieQuery: MovieQuery;
}

function MovieHeading({ movieQuery }: Props) {
  const heading = `${movieQuery.genre?.name || ""} ${
    movieQuery?.sortBy ? getSortByLabel(movieQuery.sortBy) : ""
  } Movies`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default MovieHeading;
