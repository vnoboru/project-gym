import listService from "@/services/list-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listGet(req: Request, res: Response) {
  try {
    const list = await listService.findList();

    return res.status(httpStatus.OK).send(list);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error.message);
    }

    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
