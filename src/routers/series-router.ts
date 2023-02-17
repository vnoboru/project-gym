import { seriesPost } from "@/controllers/series-controller";
import { validateBody } from "@/middlewares";
import { createSeries } from "@/schemas";
import { Router } from "express";

const seriesRouter = Router();

seriesRouter.post("/", validateBody(createSeries), seriesPost);

export { seriesRouter };
