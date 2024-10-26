import { useQuery } from "@tanstack/react-query";
import { getMovieByIdAction } from "@/core/actions/movie/get-movie-by-id.action";
import { getMovieCastByIdAction } from "@/core/actions/movie/get-movie-cast-by-id.action";

export const useMovie = (id: number) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // Mantendrá la data fresca por 24 horas
  });

  const castQuery = useQuery({
    queryKey: ["movie", id, "cast"],
    queryFn: () => getMovieCastByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24, // Mantendrá la data fresca por 24 horas
  });

  return {
    movieQuery,
    castQuery,
  };
};
