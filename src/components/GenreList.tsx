import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, isLoading, errorMessage } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenreList;
