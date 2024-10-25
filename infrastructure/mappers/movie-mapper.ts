import { Result } from "../interfaces/movie.response";
import { CompleteMovie, Movie } from "../interfaces/movie.interface";
import { MovieDetailResponse } from "../interfaces/movie-detail.response";

export class MovieMapper {
  static fromTheMovieDBToMovie = (movie: Result): Movie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
    };
  };

  static fromTheMovieDBToCompleteMovie = (
    movie: MovieDetailResponse,
  ): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      budget: movie.budget,
      duration: movie.runtime,
      genres: movie.genres.map((genre) => genre.name),
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(
        (productionCompany) => productionCompany.name,
      ),
    };
  };
}
