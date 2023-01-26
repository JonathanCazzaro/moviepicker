import { array, bool, number, object, SchemaOf } from "yup";
import { AppTypes } from "../../types/app";
import { ApiConnectionError } from "../../errors/ApiConnectionError";

interface OmdbApiConstructor {
  baseUrl: string;
  apiKey: string;
  movieCardValidationSchema: SchemaOf<AppTypes.Movie>;
  movieListItemValidationSchema: SchemaOf<AppTypes.MovieSearchResult>;
}

export class OmdbApi implements AppTypes.OmdbApi {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly movieValidationSchema: SchemaOf<AppTypes.Movie>;
  private readonly moviesListValidationSchema: SchemaOf<AppTypes.OmdbApiListResponse>;

  constructor({
    apiKey,
    baseUrl,
    movieCardValidationSchema,
    movieListItemValidationSchema,
  }: OmdbApiConstructor) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
    this.movieValidationSchema = movieCardValidationSchema;
    this.moviesListValidationSchema = object({
      Response: bool()
        .transform((value) => value === "true")
        .required(),
      totalResults: number()
        .transform((value) => Number(value))
        .required(),
      Search: array(movieListItemValidationSchema.required()).required(),
    });
  }

  async searchMovies(terms: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&s=${terms}`
      );

      if (response.status !== 200)
        return Promise.reject(new ApiConnectionError());

      const data = await this.moviesListValidationSchema.validate(
        await response.json(),
        { stripUnknown: true }
      );
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getMovieById(id: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`
      );

      if (response.status !== 200)
        return Promise.reject(new ApiConnectionError());

      const data = await this.movieValidationSchema.validate(
        await response.json(),
        { stripUnknown: true }
      );
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
