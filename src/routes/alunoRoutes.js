import { Router } from "express";
import alunoController from "../controllers/AlunoController";

const router = new Router();

router.post("/", alunoController.store);
router.get("/", alunoController.index);
export default router;
