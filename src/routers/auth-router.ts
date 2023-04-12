import { postLogin, postUser } from "@/controllers/auth-controller";
import { validateBody } from "@/middlewares";
import { createUser, loginUser } from "@/schemas/auth-schema";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", validateBody(createUser), postUser);
authRouter.post("/sign-in", validateBody(loginUser), postLogin);

export { authRouter };
