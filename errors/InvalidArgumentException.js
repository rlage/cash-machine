const ApiError = require('./ApiError');

module.exports = class InvalidArgumentException extends ApiError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'Invalid argument: argument < 0');
  }
};