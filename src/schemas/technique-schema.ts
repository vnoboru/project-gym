import Joi from "joi";

export const createTechnique = Joi.object({
  nameTechnique: Joi.string().allow("").optional(),
  description: Joi.string().allow("").optional(),
  numberSeries: Joi.string().allow("").optional(),
  numberRep: Joi.string().allow("").optional(),
});
