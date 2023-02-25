import Joi from "joi";

export const createTechnique = Joi.object({
  nameTechnique: Joi.string().required(),
  description: Joi.string(),
  numberSeries: Joi.string().required(),
  numberRep: Joi.string().min(0),
});
