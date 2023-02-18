import { Router } from "express";

import { techniquePost } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createTechnique } from "@/schemas";

const techniqueRouter = Router();

techniqueRouter.post("/", validateBody(createTechnique), techniquePost);

export { techniqueRouter };
