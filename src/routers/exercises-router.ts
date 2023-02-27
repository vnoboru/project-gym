import { Router } from "express";

import { exercisePost, exercisePut, exercisesGet } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createExercise } from "@/schemas";

const exercisesRouter = Router();

exercisesRouter.post("/", validateBody(createExercise), exercisePost);
exercisesRouter.put("/:exercId", exercisePut);
exercisesRouter.get("/list", exercisesGet);

export { exercisesRouter };
