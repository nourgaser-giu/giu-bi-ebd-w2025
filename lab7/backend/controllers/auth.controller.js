import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(createError(404, "User not found!"));
    }

    const isPasswordValid = bcryptjs.compareSync(password, validUser.password);
    if (!isPasswordValid) {
      return next(createError(401, "Wrong credentials!"));
    }

    const token = jwt.sign(
      {
        id: validUser._id,
        role: validUser.role,
        username: validUser.username,
        email: validUser.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: hashedPassword, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 86400000 }) // Sets the cookie
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json({ message: "User signed out successfully!" });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = (req, res, next) => {
  try {
    if (!req.user) {
      return next(createError(401, "Not authenticated"));
    }

    res.status(200).json(req.user);
  } catch (error) {
    next(error);
  }
};
