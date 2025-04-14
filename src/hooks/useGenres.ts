import genres from "../data/genres";
export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => ({
  data: genres,
  errorMessage: null,
  isLoading: false,
});

export default useGenres;
