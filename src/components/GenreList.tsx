import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
              <Text fontSize="lg" color="gray.00" marginBottom={2}>
                {d.name}
              </Text>
            </ListItem>
          ))}
    </List>
  );
};

export default GenreList;
