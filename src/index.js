import express from "express";
/* import createServer from "http" */
import cors from "cors";
import dotenv from "dotenv";
import { connectToDb } from "./connectToDb.js";
import { errorMiddleware } from "./errorMiddleware.js";
import { appRouter } from "./appRouter.js";

dotenv.config();
const port = process.env.PORT;
const dbUri = process.env.DB_URI;
console.clear();

const app = express();
app.use(express.json());
app.use(cors());

app.use(appRouter);
app.use(errorMiddleware);

const startServer = () =>
  app.listen(port, () => console.log(`server runs on port ${port}`));

connectToDb(dbUri)
  .then(() => startServer())
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
