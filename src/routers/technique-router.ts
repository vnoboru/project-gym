import { Router } from "express";

import { techniquePost, techniquesGet } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createTechnique } from "@/schemas";

const techniqueRouter = Router();

techniqueRouter.post("/", validateBody(createTechnique), techniquePost);
techniqueRouter.get("/list", techniquesGet);

export { techniqueRouter };
