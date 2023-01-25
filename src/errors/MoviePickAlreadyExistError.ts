export class MoviePickAlreadyExistError extends Error {
  constructor(message?: string) {
    super(message || "This movie has already been picked once." );
    Object.setPrototypeOf(this, MoviePickAlreadyExistError.prototype);
  }
}
