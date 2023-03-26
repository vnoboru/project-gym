import { trainingPost } from "@/controllers/training-controller";
import { Router } from "express";

const trainingRouter = Router();

trainingRouter.post("/", trainingPost);

export { trainingRouter };
