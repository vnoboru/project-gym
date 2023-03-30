import Joi from "joi";

export const createList = Joi.object({
  daysTraining: Joi.number().required(),
});
