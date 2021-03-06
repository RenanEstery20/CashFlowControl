import dotenv from "dotenv";

dotenv.config();

import "./src/database";

import express from "express";
import cors from "cors";
import userRoutes from "./src/routes/userRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use("/users/", userRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/tokens/", tokenRoutes);
  }
}

export default new App().app;
