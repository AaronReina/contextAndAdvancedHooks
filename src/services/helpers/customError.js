function CustomException(message, data) {
  const error = new Error(message);
  error.data = data;
  return error;
}

CustomException.prototype = Object.create(Error.prototype);

export default CustomException;
