import { techniqueService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function techniquePost(req: Request, res: Response) {
  const { nameTechnique, description, numberSeries, numberRep } = req.body;
  try {
    const technique = await techniqueService.createTechnique({ nameTechnique, description, numberSeries, numberRep });

    return res.status(httpStatus.CREATED).json({
      id: technique.id,
      nameTechnique: technique.nameTechnique,
      description: technique.description,
      numberSeries: technique.numberSeries,
      numberRep: technique.numberRep,
    });
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function techniquePut(req: Request, res: Response) {
  const techniqueId = Number(req.params.techniqueId);
  const { nameTechnique, description, numberSeries, numberRep } = req.body;

  try {
    const updatedTechnique = await techniqueService.putTechnique(techniqueId, {
      nameTechnique,
      description,
      numberSeries,
      numberRep,
    });
    return res.status(httpStatus.OK).send(updatedTechnique);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function techniquesGet(req: Request, res: Response) {
  try {
    const { nameTechnique } = req.query;
    const listTechniques = await techniqueService.findTechniques(nameTechnique as string);

    return res.status(httpStatus.OK).send(listTechniques);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function techniqueDelete(req: Request, res: Response) {
  const techniqueId = Number(req.params.techniqueId);

  try {
    const deleteTechnique = await techniqueService.deleteTechnique(techniqueId);
    return res.status(httpStatus.OK).send(deleteTechnique);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
