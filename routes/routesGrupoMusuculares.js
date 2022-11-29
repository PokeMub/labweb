import express from "express";
// import Aluno from "../models/AlunoModel.js";
import { createGrupoMuscular, updateGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGrupoMusculares } from
"../controllers/grupoMuscularController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/",verificarToken, createGrupoMuscular);
router.put("/:id", verificarToken,updateGrupoMuscular);
router.delete("/:id",verificarToken, deleteGrupoMuscular);
router.get("/:id",verificarToken, getGrupoMuscular);
router.get("/", verificarToken,getGrupoMusculares);
export default router;