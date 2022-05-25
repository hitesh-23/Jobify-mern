import CustomAPIError from "./custom-api.js";
import statusCodes from "http-status-codes";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
