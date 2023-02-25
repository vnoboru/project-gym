import Joi from "joi";

export const createExercise = Joi.object({
  nameExerc: Joi.string().required(),
  bodyPart: Joi.string().required(),
  classification: Joi.string(),
});
