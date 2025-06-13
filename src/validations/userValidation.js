import Joi from "joi";

export const registerUserSchema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(50).required(),
});

export const LoginUserSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(50).required(),
});
