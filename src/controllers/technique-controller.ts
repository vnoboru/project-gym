import { techniqueServices } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function techniquePost(req: Request, res: Response) {
  const { nameTechnique, description } = req.body;
  try {
    const technique = await techniqueServices.createTechnique({ nameTechnique, description });

    return res.status(httpStatus.CREATED).json({
      id: technique.id,
      nameTechnique: technique.nameTechnique,
      description: technique.description,
    });
  } catch (error) {
    if (error.name === "DuplicatedExerciceError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}