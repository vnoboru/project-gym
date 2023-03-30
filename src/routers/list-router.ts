import { listDelete, listGet, listPost } from "@/controllers/list-controller";
import { validateBody } from "@/middlewares";
import { createList } from "@/schemas/list-router";
import { Router } from "express";

const listRouter = Router();

listRouter.post("/", validateBody(createList), listPost);
listRouter.delete("/:listId", listDelete);
listRouter.get("/", listGet);
export { listRouter };
