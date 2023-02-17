import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "@/config";
import { loadEnv } from "@/config/env";
import { exercicesRouter } from "@/routers";

loadEnv();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"))
  .use("/exercice", exercicesRouter);

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
