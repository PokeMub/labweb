import express from "express";
// import Aluno from "../models/AlunoModel.js";
import { createAluno, updateAluno, deleteAluno, getAluno, getAlunos } from
"../controllers/AlunoController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";
const router = express.Router();


router.post("/",verificarToken, createAluno);
router.put("/:id", verificarToken, updateAluno);
router.delete("/:id",verificarToken, deleteAluno);
router.get("/:id",verificarToken, getAluno);
router.get("/",verificarToken, getAlunos);
export default router;