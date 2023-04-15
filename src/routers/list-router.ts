import { listDelete, listGet, listPost } from "@/controllers/list-controller";
import { Router } from "express";

const listRouter = Router();

listRouter.post("/", listPost);
listRouter.delete("/:listId", listDelete);
listRouter.get("/", listGet);
export { listRouter };
