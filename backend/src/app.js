import express from "express";
import Router from "./routes/index.js";
import cors from "cors";

const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(Router);

export default app;
