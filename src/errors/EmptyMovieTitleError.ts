export class EmptyMovieTitleError extends Error {
  constructor(message?: string) {
    super(message || "Cannot pick a movie whose title is empty.");
    Object.setPrototypeOf(this, EmptyMovieTitleError.prototype);
    this.name = "EmptyMovieTitleError";
  }
}
