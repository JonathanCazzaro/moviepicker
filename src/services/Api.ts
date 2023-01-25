import { array, bool, number, object, SchemaOf } from "yup";
import { App } from "../types/app";

interface OmdbApiConstructor {
  baseUrl: string;
  apiKey: string;
  movieCardValidationSchema: SchemaOf<App.Movie>;
  movieListItemValidationSchema: SchemaOf<App.MovieSearchResult>;
}

export class OmdbApi implements App.OmdbApi {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly movieValidationSchema: SchemaOf<App.Movie>;
  private readonly moviesListValidationSchema: SchemaOf<App.OmdbApiListResponse>;

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
      Search: array().of(movieListItemValidationSchema.required()).required(),
    });
  }

  async searchMovies(terms: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&s=${terms}`
      );
      return await this.moviesListValidationSchema.validate(
        await response.json(),
        { stripUnknown: true }
      );
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieById(id: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`
      );
      return await this.movieValidationSchema.validate(await response.json(), {
        stripUnknown: true,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
