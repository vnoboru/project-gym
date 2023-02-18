import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";

export function validateBody(schema: ObjectSchema) {
  return validate(schema, "body");
}

function validate(schema: ObjectSchema, type: "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
  };
}
