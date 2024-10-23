import { movieApi } from "@/core/api/movie-api";
import { MovieResponse } from "@/infrastructure/interfaces/movie-response";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieResponse>("/now_playing");

    console.log(
      "🚀 now-playing.action.ts -> #7 ~",
      JSON.stringify(data, null, 2),
    );

    return [];
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
