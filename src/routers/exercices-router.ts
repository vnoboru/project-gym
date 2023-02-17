import { exercicePost } from "@/controllers/exercices-controller";
import { validateBody } from "@/middlewares/validation-middleware";
import { createExercice } from "@/schemas/exercices-schema";
import { Router } from "express";

const exercicesRouter = Router();

exercicesRouter.post("/", validateBody(createExercice), exercicePost);

export { exercicesRouter };
