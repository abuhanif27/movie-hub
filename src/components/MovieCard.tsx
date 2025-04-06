// import { Genre } from "../hooks/useGenres";
import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { getDate } from "../hooks/useMovies";

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
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl(movie.poster_path)} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
        <Text fontSize="lg" color="gray.500" mt={2}>
          {getDate(movie.release_date)}
        </Text>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
