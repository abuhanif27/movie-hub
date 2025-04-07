import { Movie } from "../hooks/useMovies";
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import VoteCount from "./VoteCount";
import Rating from "./Rating";
import getDate from "../services/getDate";
import imageUrl from "../services/imageUrl";

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <Card>
      <Image src={imageUrl(movie.poster_path)} />
      <CardBody>
        <Heading fontSize="2xl">
          {movie.title.length <= 15
            ? movie.title
            : movie.title.substring(0, 15) + "..."}
        </Heading>
        <Box display="flex" justifyContent="space-between" mt={5} paddingX={1}>
          <VoteCount vote={movie.vote_count} />
          <Rating rating={movie.vote_average} />
        </Box>
        <Text
          fontSize="lg"
          color="gray.500"
          mt={5}
          textAlign={"center"}
          letterSpacing={2}
        >
          {getDate(movie.release_date)}
        </Text>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
