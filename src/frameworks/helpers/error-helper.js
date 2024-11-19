class ErrorHelper extends Error {
  constructor(message, statCode) {
    Error(message);
    this.statusCode = statCode ?? 500;
    Error.captureStackTrace(this, this.constructor);
  }
}
