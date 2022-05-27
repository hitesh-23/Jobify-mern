import CustomAPIError from "./custom-api.js";
import statusCodes from "http-status-codes";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.UNAUTHORIZED;
  }
}

export default UnAuthenticatedError;
