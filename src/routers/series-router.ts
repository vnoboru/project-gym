import { Router } from "express";

import { seriesPost } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createSeries } from "@/schemas";

const seriesRouter = Router();

seriesRouter.post("/", validateBody(createSeries), seriesPost);

export { seriesRouter };
