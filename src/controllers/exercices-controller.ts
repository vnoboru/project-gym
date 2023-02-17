import exercicesService from "@/services/exercices-service";
import { Request, Response } from "express";

export async function exercicePost(req: Request, res: Response) {
  const { nameExerc, bodyPart, classification } = req.body;
  try {
    const exercice = await exercicesService.createExercice({ nameExerc, bodyPart, classification });
    return res.status(200).send({
      id: exercice.id,
      nameExerc: exercice.nameExerc,
      bodyPart: exercice.bodyPart,
      classification: exercice.classification,
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
