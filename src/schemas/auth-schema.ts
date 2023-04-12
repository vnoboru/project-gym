import Joi from "joi";

export const createUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const loginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
