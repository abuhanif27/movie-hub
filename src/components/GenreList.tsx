import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, errorMessage, isLoading } = useGenres();

  if (isLoading) return <p>Loading...</p>;
  if (errorMessage) return <p>Error: {errorMessage}</p>;

  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
