import { trainingService } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function trainingPost(req: Request, res: Response) {
  const { nameTraining } = req.body;
  try {
    const training = await trainingService.createTraining(nameTraining);

    return res.status(httpStatus.CREATED).json({
      id: training.id,
      nameTraining: training.nameTraining,
    });
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function trainingPut(req: Request, res: Response) {
  const trainingId = Number(req.params.trainingId);
  const { nameTraining } = req.body;

  try {
    const updatedTraining = await trainingService.putTraining(trainingId, nameTraining);
    return res.status(httpStatus.OK).send(updatedTraining);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function trainingsGet(req: Request, res: Response) {
  try {
    const listTrainings = await trainingService.findTrainings();

    return res.status(httpStatus.OK).send(listTrainings);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function trainingDelete(req: Request, res: Response) {
  const trainingId = Number(req.params.trainingId);

  try {
    const deleteTraining = await trainingService.deleteTraining(trainingId);
    return res.status(httpStatus.OK).send(deleteTraining);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
