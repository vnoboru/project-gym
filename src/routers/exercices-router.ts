import { Router } from "express";

import { exercicePost, exercicesGet } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createExercice } from "@/schemas";

const exercicesRouter = Router();

exercicesRouter.post("/", validateBody(createExercice), exercicePost);
exercicesRouter.get("/list", exercicesGet);

export { exercicesRouter };
