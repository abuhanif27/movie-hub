import { List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, errorMessage, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} paddingY="5px">
          <Text fontSize="lg">{d.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
