import { EmptyMovieTitleError } from "../../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistsError } from "../../errors/MoviePickAlreadyExistError";
import { App } from "../../types/app";
import { store } from "../../store/store";
import { setError } from "../../store/slices/interfaceSlice";

export class MoviePicker implements App.MoviePicker {
  private readonly repo: App.MoviePickRepo;

  constructor(repo: App.MoviePickRepo) {
    this.repo = repo;
  }

  async pick(movieTitle: string) {
    try {
      if (!movieTitle) return Promise.reject(new EmptyMovieTitleError());

      const existingMoviePick = await this.repo.getByFirstLetter(
        movieTitle.charAt(0)
      );
      if (existingMoviePick)
        return Promise.reject(new MoviePickAlreadyExistsError());

      await this.repo.put(movieTitle);
    } catch (error) {
      console.error(error);
      switch (error) {
        case error instanceof EmptyMovieTitleError:
          store.dispatch(setError(App.Error.EMPTY_MOVIE_TITLE));
          break;
        case error instanceof MoviePickAlreadyExistsError:
          store.dispatch(setError(App.Error.MOVIE_PICK_ALREADY_EXISTS));
          break;
        default:
          store.dispatch(setError(App.Error.GENERIC));
          break;
      }
    }
  }
}
