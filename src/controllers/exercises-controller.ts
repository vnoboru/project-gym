import exercisesService from "@/services/exercises-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function exercisePost(req: Request, res: Response) {
  const { nameExerc, bodyPart, classification } = req.body;
  try {
    const exercise = await exercisesService.createExercise({ nameExerc, bodyPart, classification });

    return res.status(httpStatus.CREATED).json({
      id: exercise.id,
      nameExerc: exercise.nameExerc,
      bodyPart: exercise.bodyPart,
      classification: exercise.classification,
    });
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function exercisePut(req: Request, res: Response) {
  const exercId = Number(req.params.exercId);
  const { nameExerc, bodyPart, classification } = req.body;

  try {
    const updatedExerc = await exercisesService.putExercise(exercId, { nameExerc, bodyPart, classification });
    return res.status(httpStatus.OK).send(updatedExerc);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function exercisesGet(req: Request, res: Response) {
  try {
    const listExercises = await exercisesService.findExercises();

    return res.status(httpStatus.OK).send(listExercises);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function exerciseDelete(req: Request, res: Response) {
  const exercId = Number(req.params.exercId);

  try {
    const deleteExerc = await exercisesService.deleteExercise(exercId);
    return res.status(httpStatus.OK).send(deleteExerc);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
