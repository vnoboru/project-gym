import { connectDb, disconnectDB } from "@/config";
import { loadEnv } from "@/config/env";
import { exercicesRouter, seriesRouter } from "@/routers";
import cors from "cors";
import express, { Express } from "express";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"))
  .use("/exercice", exercicesRouter)
  .use("/series", seriesRouter);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
