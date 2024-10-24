import { useQuery } from "@tanstack/react-query";
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24, // Mantendrá la data fresca por 24 horas
  });

  return {
    nowPlayingQuery,
  };
};
