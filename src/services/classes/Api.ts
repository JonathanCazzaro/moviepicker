import {
  array,
  bool,
  number,
  object,
  SchemaOf,
  string,
  ValidationError,
} from "yup";
import { AppTypes } from "../../types/app";
import { store } from "../../store/store";
import { clearError, setError } from "../../store/slices/interfaceSlice";

interface OmdbApiConstructor {
  baseUrl: string;
  apiKey: string;
  movieCardValidationSchema: SchemaOf<AppTypes.Movie>;
  movieListItemValidationSchema: SchemaOf<AppTypes.MovieSearchResult>;
}

const handleError = (error: unknown): void => {
  console.error(error);
  switch (error) {
    case error instanceof ValidationError:
      store.dispatch(setError(AppTypes.Error.VALIDATION_ERROR));
      break;
    default:
      store.dispatch(setError(AppTypes.Error.GENERIC));
      break;
  }
};

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
        .notRequired(),
      Search: array(movieListItemValidationSchema.notRequired()).notRequired(),
      Error: string().notRequired(),
    });
  }

  async searchMovies(terms: string) {
    try {
      store.dispatch(clearError());
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&s=${terms}`
      );
      return await this.moviesListValidationSchema.validate(
        await response.json(),
        { stripUnknown: true }
      );
    } catch (error) {
      handleError(error);
    }
  }

  async getMovieById(id: string) {
    try {
      store.dispatch(clearError());
      const response = await fetch(
        `${this.baseUrl}/?apikey=${this.apiKey}&i=${id}`
      );
      return await this.movieValidationSchema.validate(await response.json(), {
        stripUnknown: true,
      });
    } catch (error) {
      handleError(error);
    }
  }
}
