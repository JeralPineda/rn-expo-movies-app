import { movieApi } from "@/core/api/movie-api";
import { MovieDetailResponse } from "@/infrastructure/interfaces/movie-detail.response";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { MovieMapper } from "@/infrastructure/mappers/movie-mapper";

export const getMovieByIdAction = async (
  id: number | string,
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDetailResponse>(`/${id}`);
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load movie";
  }
};
