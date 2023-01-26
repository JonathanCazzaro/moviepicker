import { AppTypes } from "../types/app";

export class MoviePickAlreadyExistsError extends Error {
  constructor(message?: string) {
    super(message || "This movie has already been picked once.");
    this.name = AppTypes.Error.MOVIE_PICK_ALREADY_EXISTS;
  }
}
