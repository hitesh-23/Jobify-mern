import CustomAPIError from "./custom-api.js";
import statusCodes from "http-status-codes";

class notFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = statusCodes.NOT_FOUND;
  }
}

export default notFoundError;
