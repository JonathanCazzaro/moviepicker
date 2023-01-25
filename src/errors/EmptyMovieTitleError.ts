import { App } from "../types/app";

export class EmptyMovieTitleError extends Error {
  constructor(message?: string) {
    super(message || "Cannot pick a movie whose title is empty.");
    this.name = App.Error.EMPTY_MOVIE_TITLE;
  }
}
