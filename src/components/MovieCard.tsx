// import { Genre } from "../hooks/useGenres";
import { Movie } from "../hooks/useMovies";
import { Box, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { getDate } from "../hooks/useMovies";
import VoteCount from "./VoteCount";
import Rating from "./Rating";

const imageUrl = (image_path: string) =>
  `https://image.tmdb.org/t/p/w500${image_path}`;

interface Props {
  movie: Movie;
  // genres: Genre[];
}

function MovieCard({ movie }: Props) {
  // const genreNames = movie.genre_ids
  //   .map((id) => genres.find((g) => g.id === id)?.name)
  //   .filter(Boolean)
  //   .join(", ");
  return (
    <Card width="300px" borderRadius={10} overflow="hidden">
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
