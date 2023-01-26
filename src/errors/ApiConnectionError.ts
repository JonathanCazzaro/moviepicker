export class ApiConnectionError extends Error {
  constructor(message?: string) {
    super(message || "Connection to API has been refused.");
    Object.setPrototypeOf(this, ApiConnectionError.prototype);
    this.name = "ApiConnectionError";
  }
}
