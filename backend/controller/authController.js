import bcrypt, { hash } from "bcrypt";

import User from "../models/User.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(200).json({
        message: "user created successfully"
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "user signup failed" });
  }
};
// export const loginUser = async (req, res) => {};
