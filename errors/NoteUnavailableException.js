const ApiError = require('./ApiError');

module.exports = class NoteUnavailableException extends ApiError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'The machine doesn\'t have notes for this amount');
  }
};