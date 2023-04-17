import listService from "@/services/list-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listPost(req: Request, res: Response) {
  const lists = req.body;
  try {
    const createdLists = await listService.createList(lists);

    return res.status(httpStatus.CREATED).json(createdLists);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST);
  }
}
export async function listAllGet(req: Request, res: Response) {
  try {
    const list = await listService.findAllList();

    return res.status(httpStatus.OK).send(list);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
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
