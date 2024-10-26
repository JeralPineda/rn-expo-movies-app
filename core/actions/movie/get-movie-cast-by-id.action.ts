import { movieApi } from "@/core/api/movie-api";
import { MovieCreditsResponse } from "@/infrastructure/interfaces/movie-credits.response";
import { CastMapper } from "@/infrastructure/mappers/cast-mapper";

export const getMovieCastByIdAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieCreditsResponse>(
      `/${movieId}/credits`,
    );

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cant load movie cast by id";
  }
};
