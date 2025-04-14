import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import MovieGrid from "./components/MovieGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortBySelector from "./components/SortBySelector";
import MovieHeading from "./components/MovieHeading";

export interface MovieQuery {
  genre: Genre | null;
  sortBy: string;
  searchText: string;
}

function App() {
  const [movieQuery, setMovieQuery] = useState<MovieQuery>({} as MovieQuery);

  // Beginner-friendly way to check if the user is searching
  const isSearching = movieQuery.searchText && movieQuery.searchText.length > 0;

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: isSearching ? "0 1fr" : "200px 1fr", // hide aside when searching
      }}
    >
      {/* Navbar */}
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) =>
            setMovieQuery({ ...movieQuery, searchText })
          }
        />
      </GridItem>

      {/* Genre Sidebar (Only when not searching) */}
      {!isSearching && (
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setMovieQuery({ ...movieQuery, genre })}
            selectedGenre={movieQuery.genre}
          />
        </GridItem>
      )}

      {/* Main Movie Grid */}
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MovieHeading movieQuery={movieQuery} />
          {!isSearching && (
            <Box marginBottom={5}>
              <SortBySelector
                sortOrderBy={movieQuery.sortBy}
                onSortBy={(sort) =>
                  setMovieQuery({ ...movieQuery, sortBy: sort })
                }
              />
            </Box>
          )}
        </Box>

        <MovieGrid movieQuery={movieQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
