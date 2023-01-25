import { EmptyMovieTitleError } from "../errors/EmptyMovieTitleError";
import { MoviePickAlreadyExistError } from "../errors/MoviePickAlreadyExistError";
import { Services } from "../types/services";

export class MoviePicker implements Services.MoviePicker {
  private readonly repo: Services.MoviePickRepo;

  constructor(repo: Services.MoviePickRepo) {
    this.repo = repo;
  }

  async pick(movieTitle: string) {
    try {
      if (!movieTitle) return Promise.reject(new EmptyMovieTitleError());

      const existingMoviePick = await this.repo.getByFirstLetter(
        movieTitle.charAt(0)
      );
      if (existingMoviePick)
        return Promise.reject(new MoviePickAlreadyExistError());

      await this.repo.put(movieTitle);
    } catch (error) {
      console.error(error);
    }
  }
}
