import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();

let JWT_SECRET = `${process.env.JWT_SECRET}`;
let JWT_EXPIRY = `${process.env.JWT_EXPIRY}`;

export const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRY || "7d",
  });
};
