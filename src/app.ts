import { connectDb, disconnectDB } from "@/config";
import { loadEnv } from "@/config/env";
import { exercisesRouter, techniqueRouter } from "@/routers";
import cors from "cors";
import express, { Express } from "express";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"))
  .use("/exercise", exercisesRouter)
  .use("/technique", techniqueRouter);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
