import { Movie } from "../hooks/useMovies";
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import VoteCount from "./VoteCount";
import Rating from "./Rating";
import getDate from "../services/getDate";
import imageUrl from "../services/imageUrl";
import Emoji from "./Emoji";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <Card>
      <Image
        src={movie.poster_path ? imageUrl(movie.poster_path) : "no-movie.png"}
        maxHeight={300}
        objectFit="cover"
      />
      <CardBody>
        <Heading fontSize={21} marginBottom={3}>
          {movie.title}
        </Heading>
        <Emoji rating={movie.vote_average} />
        <Box display="flex" justifyContent="space-between" mt={5} paddingX={1}>
          <VoteCount vote={movie.vote_count} />
          <Rating rating={movie.vote_average} />
        </Box>
        <Text
          fontSize="md"
          color="gray.500"
          mt={5}
          textAlign={"center"}
          letterSpacing={1}
        >
          {getDate(movie.release_date)}
        </Text>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
