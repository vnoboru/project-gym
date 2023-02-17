import Joi from "joi";

export const createExercice = Joi.object({
  nameExerc: Joi.string().required(),
  bodyPart: Joi.string().required(),
  classification: Joi.string().required(),
});
