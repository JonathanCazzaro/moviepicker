export class MoviePickAlreadyExistsError extends Error {
  constructor(message?: string) {
    super(
      message ||
        "You cannot pick more than one movie starting with this letter."
    );
    Object.setPrototypeOf(this, MoviePickAlreadyExistsError.prototype);
    this.name = "MoviePickAlreadyExistsError";
  }
}
