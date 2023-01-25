import { array, bool, number, object, SchemaOf } from "yup";
import { Services } from "../types/services";

interface OmdbApiConstructor {
  baseUrl: string;
  apiKey: string;
  movieCardValidationSchema: SchemaOf<Services.Movie>;
  movieListItemValidationSchema: SchemaOf<Services.MovieSearchResult>;
}

export class OmdbApi implements Services.OmdbApi {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly movieValidationSchema: SchemaOf<Services.Movie>;
  private readonly moviesListValidationSchema: SchemaOf<Services.OmdbApiListResponse>;

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
        .transform((value) => Boolean(value))
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
