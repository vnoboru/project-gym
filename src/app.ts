import express, { Express } from "express";
import cors from "cors";
import { connectDb, disconnectDB } from "./config";
import { loadEnv } from "./config/env";

loadEnv();
const app = express();

app
  .use(cors())
  .use(express.json())
  .get("/test", (_req, res) => res.send("OK!"));

export async function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
