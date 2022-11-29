import express from "express";
// import Aluno from "../models/AlunoModel.js";
import { createTipoExercicio, updateTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTipoExercicios } from
"../controllers/tipoExercicioController.js";
import { verificarAdmin, verificarToken, verificarUsuario } from "../utils/verificarToken.js";
const router = express.Router();

router.post("/",verificarToken, createTipoExercicio);
router.put("/:id",verificarToken, updateTipoExercicio);
router.delete("/:id",verificarToken, deleteTipoExercicio);
router.get("/:id",verificarToken, getTipoExercicio);
router.get("/", verificarToken,getTipoExercicios);
export default router;