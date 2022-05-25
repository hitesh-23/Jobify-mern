import User from "../models/User.js";
import statusCodes from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    throw new BadRequestError("Please enter all the values");
  }
  const userAlreadyRegistered = await User.findOne({ email });
  if (userAlreadyRegistered) {
    throw new BadRequestError("Email already in use");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(statusCodes.OK).json({
    user: {
      email: user.email,
      name: user.name,
      location: user.location,
      lastName: user.lastName,
    },
    token,
  });
};

const login = async (req, res) => {
  res.send("Login User");
};

const updateUser = async (req, res) => {
  res.send("Update User");
};

export { register, login, updateUser };
