import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  createUser,
  findUserByEmail,
  findUserById,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../models/userModel.js";

export const register = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "name , email and password required !",
      });
    }

    let userAlreadyExist = await findUserByEmail(email);

    if (userAlreadyExist) {
      return res
        .status(401)
        .json({ success: false, message: "email already exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(name, email, hashedPassword);

    return res
      .status(201)
      .json({ success: true, message: "User registerd successfully", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
