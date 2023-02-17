import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "body");
}

function validate(schema: ObjectSchema, type: "body" | "params") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      res.sendStatus(400);
    }
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;
