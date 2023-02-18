import seriesServices from "@/services/series-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function seriesPost(req: Request, res: Response) {
  const { numberSeries, numberRep } = req.body;
  try {
    const series = await seriesServices.createSeries({ numberRep, numberSeries });

    return res.status(httpStatus.CREATED).json({
      id: series.id,
      numberSeries: series.numberSeries,
      numberRep: series.numberRep,
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
}
