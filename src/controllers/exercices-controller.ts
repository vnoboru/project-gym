import exercicesService from "@/services/exercices-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function exercicePost(req: Request, res: Response) {
  const { nameExerc, bodyPart, classification } = req.body;
  try {
    const exercice = await exercicesService.createExercice({ nameExerc, bodyPart, classification });

    return res.status(httpStatus.CREATED).json({
      id: exercice.id,
      nameExerc: exercice.nameExerc,
      bodyPart: exercice.bodyPart,
      classification: exercice.classification,
    });
  } catch (error) {
    if (error.name === "DuplicatedExerciceError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
