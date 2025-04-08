import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (gerne: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, errorMessage, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  if (errorMessage) return null;

  return (
    <List>
      {isLoading
        ? skeletons.map((skeleton) => (
            <ListItem key={skeleton}>
              <GenreSkeleton />
            </ListItem>
          ))
        : data.map((d) => (
            <ListItem key={d.id}>
              <Button
                fontSize="lg"
                colorScheme="gray"
                marginBottom={2}
                variant="link"
                fontWeight={d.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(d)}
              >
                {d.name}
              </Button>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
