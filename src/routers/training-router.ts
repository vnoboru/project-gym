import { trainingDelete, trainingPost, trainingPut, trainingsGet } from "@/controllers/training-controller";
import { Router } from "express";

const trainingRouter = Router();

trainingRouter.post("/", trainingPost);
trainingRouter.put("/:trainingId", trainingPut);
trainingRouter.delete("/:trainingId", trainingDelete);
trainingRouter.get("/list", trainingsGet);

export { trainingRouter };
