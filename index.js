import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"
import routeAuth from "./routes/authRoutes.js";
import connectDatabase from "./config/db.js";
import routeAlunos from "./routes/routesAlunos.js";
import routeGrupoMusuculares from "./routes/routesGrupoMusuculares.js";
import { errorHandling } from "./utils/error.js";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandling);
app.use("/api/alunos", routeAlunos);
app.use("/api/grupoMusculares", routeGrupoMusuculares);
app.use("/api/auth", routeAuth);
app.listen(8080, () => {
    connectDatabase();
    console.log("Servidor rodando na porta 8080.");
});