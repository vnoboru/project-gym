import seriesRepository from "@/repositories/series-repository";
import { series } from "@prisma/client";

export async function createSeries({ numberRep, numberSeries }: CreateSeriesParams): Promise<series> {
  return seriesRepository.create({
    numberRep,
    numberSeries,
  });
}

export type CreateSeriesParams = Pick<series, "numberRep" | "numberSeries">;

const seriesServices = {
  createSeries,
};

export default seriesServices;
