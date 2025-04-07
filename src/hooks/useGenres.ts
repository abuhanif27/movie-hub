import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  return useData<Genre>("/genre/movie/list", "genres");
};

export default useGenres;
