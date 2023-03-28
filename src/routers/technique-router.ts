import { Router } from "express";

import { techniqueDelete, techniquePost, techniquePut, techniquesGet } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createTechnique } from "@/schemas";

const techniqueRouter = Router();

techniqueRouter.post("/", validateBody(createTechnique), techniquePost);
techniqueRouter.put("/:techniqueId", techniquePut);
techniqueRouter.delete("/:techniqueId", techniqueDelete);
techniqueRouter.get("/list", techniquesGet);

export { techniqueRouter };
