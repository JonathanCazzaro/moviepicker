namespace AppTypes {
  interface MoviePickRepo {
    getByFirstLetter: (firstLetter: string) => Promise<string | null>;
    getAll: () => Promise<string[]>;
    put: (title: string) => Promise<void>;
  }

  interface MoviePicker {
    pick: (movieTitle: string) => Promise<void>;
  }

  interface OmdbApi {
    searchMovies: (terms: string) => Promise<OmdbApiListResponse | undefined>;
    getMovieById: (id: string) => Promise<Movie | void>;
  }

  type OmdbApiListResponse = {
    Response: boolean;
    Search?: MovieSearchResult[];
    totalResults: number;
  };

  interface MovieSearchResult {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
  }

  type Movie = MovieSearchResult & {
    Plot: string;
    Actors: string;
  };

  enum Error {
    EMPTY_MOVIE_TITLE = "EmptyMovieTitleError",
    API_CONNECTION = "ApiConnectionError",
    MOVIE_PICK_ALREADY_EXISTS = "MoviePickAlreadyExistsError",
    VALIDATION_ERROR = "ValidationError",
    GENERIC = "Generic",
  }

  type Notification = {
    type: "error" | "success";
    message: string;
  }
}
