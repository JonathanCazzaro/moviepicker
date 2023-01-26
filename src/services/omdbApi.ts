import { object, string } from "yup";
import { OmdbApi } from "./classes/Api";

const omdbApi = new OmdbApi({
  baseUrl: import.meta.env.VITE_OMDB_BASE_URL,
  apiKey: import.meta.env.VITE_OMDB_API_KEY,
  movieCardValidationSchema: object({
    Title: string().required(),
    imdbID: string().required(),
    Year: string().required(),
    Poster: string().required(),
    Actors: string().required(),
    Plot: string().required(),
  }),
  movieListItemValidationSchema: object({
    Title: string().required(),
    imdbID: string().required(),
    Poster: string().required(),
    Year: string().required(),
  }),
});

export default omdbApi;
