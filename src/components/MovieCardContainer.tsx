import { Box } from "@chakra-ui/react";
import React from "react";
interface Props {
  children: React.ReactNode;
}

function MovieCardContainer({ children }: Props) {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
}

export default MovieCardContainer;
