import Joi from "joi";

export const createSeries = Joi.object({
  numberSeries: Joi.number().integer().min(0).required(),
  numberRep: Joi.number().integer().min(0),
});
