import { Movie } from "../hooks/useMovies";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

const imageUrl = (image_path: string) =>
  `https://image.tmdb.org/t/p/w500${image_path}`;

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={imageUrl(movie.poster_path)} />
      <CardBody>
        <Heading fontSize="2xl">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
}

export default MovieCard;
