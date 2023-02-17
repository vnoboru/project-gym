import { Router } from "express";

import { exercicePost } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createExercice } from "@/schemas";

const exercicesRouter = Router();

exercicesRouter.post("/", validateBody(createExercice), exercicePost);

export { exercicesRouter };
