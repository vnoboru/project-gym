import { listGet } from "@/controllers/list-controller";
import { Router } from "express";

const listRouter = Router();

listRouter.get("/", listGet);

export { listRouter };
