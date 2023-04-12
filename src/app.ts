import { connectDb, disconnectDB } from "@/config";
import { loadEnv } from "@/config/env";
import { exercisesRouter, listRouter, techniqueRouter, trainingRouter } from "@/routers";
import cors from "cors";
import express, { Express } from "express";
import { authRouter } from "./routers/auth-router";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"))
  .use("/", authRouter)
  .use("/exercise", exercisesRouter)
  .use("/technique", techniqueRouter)
  .use("/list", listRouter)
  .use("/training", trainingRouter);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
