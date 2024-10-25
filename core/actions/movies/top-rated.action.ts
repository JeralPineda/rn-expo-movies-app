import { movieApi } from "@/core/api/movie-api";
import { MovieResponse } from "@/infrastructure/interfaces/movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movie-mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieResponse>("/top_rated", {
      params: {
        page,
      },
    });

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
