import listService from "@/services/list-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listPost(req: Request, res: Response) {
  const { idExerc, idTechnique, daysTraining, idTraining } = req.body;
  try {
    const list = await listService.createList(idExerc, idTechnique, daysTraining, idTraining);

    return res.status(httpStatus.CREATED).json({
      id: list.id,
    });
  } catch (error) {
    if (error.name === "ConflictError") {
      return res.status(httpStatus.CONFLICT).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}

export async function listGet(req: Request, res: Response) {
  const daysTraining = Number(req.query.daysTraining);

  try {
    const list = await listService.findList(daysTraining);

    return res.status(httpStatus.OK).send(list);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function listDelete(req: Request, res: Response) {
  const listId = Number(req.params.listId);

  try {
    const deleteList = await listService.deleteList(listId);
    return res.status(httpStatus.OK).send(deleteList);
  } catch (error) {
    if (error.name === "NotFoundExerciseError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
