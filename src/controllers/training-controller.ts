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
