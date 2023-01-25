import { EmptyMovieTitleError } from "../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistError } from "../errors/MoviePickAlreadyExistError";

export namespace Services {
  export interface MoviePickRepo {
    getByFirstLetter: (firstLetter: string) => Promise<string | null>;
    getAll: () => Promise<string[]>;
    put: (title: string) => Promise<void>;
  }

  export interface MoviePicker {
    pick: (
      movieTitle: string
    ) => Promise<void | EmptyMovieTitleError | MoviePickAlreadyExistError>;
  }
}
