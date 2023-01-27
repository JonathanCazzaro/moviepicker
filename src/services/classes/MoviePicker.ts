import { EmptyMovieTitleError } from "../../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistsError } from "../../errors/MoviePickAlreadyExistError";

export class MoviePicker implements AppTypes.MoviePicker {
  private readonly repo: AppTypes.MoviePickRepo;

  constructor(repo: AppTypes.MoviePickRepo) {
    this.repo = repo;
  }

  async pick(movieTitle: string) {
    if (!movieTitle) return Promise.reject(new EmptyMovieTitleError());

    const existingMoviePick = await this.repo.getByFirstLetter(
      movieTitle.charAt(0)
    );
    if (existingMoviePick)
      return Promise.reject(new MoviePickAlreadyExistsError());

    await this.repo.put(movieTitle);
  }
}
