import { Router } from "express";

import { exerciseDelete, exercisePost, exercisePut, exercisesGet } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createExercise } from "@/schemas";

const exercisesRouter = Router();

exercisesRouter.post("/", validateBody(createExercise), exercisePost);
exercisesRouter.put("/:exercId", exercisePut);
exercisesRouter.delete("/:exercId", exerciseDelete);
exercisesRouter.get("/list", exercisesGet);

export { exercisesRouter };
