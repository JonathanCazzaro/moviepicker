
export namespace Services {
  export interface MoviePickRepo {
    getByFirstLetter: (firstLetter: string) => Promise<string | null>;
    getAll: () => Promise<string[]>;
    put: (title: string) => Promise<void>;
  }

  export interface MoviePicker {
    pick: (movieTitle: string) => Promise<void>;
  }

  export interface OmdbApi {
    searchMovies: (terms: string) => Promise<OmdbApiListResponse | undefined>;
    getMovieById: (id: string) => Promise<Movie | void>;
  }

  export type OmdbApiListResponse = {
    Response: boolean;
    Search?: MovieSearchResult[];
    totalResults: number;
  };

  export interface MovieSearchResult {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  }

  export type Movie = MovieSearchResult & {
    Plot: string;
    Actors: string;
  };
}
