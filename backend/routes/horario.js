import { Router } from "express";
import { HorarioController } from "../controllers/horarioController";

export const horarioRouter = Router();

// Ruta para crear un nuevo horario para un campo específico
horarioRouter.post("/fields/:id/horarios", HorarioController.createHorario);

// Ruta para actualizar un horario existente por su ID
horarioRouter.patch("/horarios/:id", HorarioController.updateHorario);

// Ruta para eliminar un horario por su ID
horarioRouter.delete("/horarios/:id", HorarioController.deleteHorarioByFieldId);

// Ruta para obtener los horarios disponibles para un campo específico
// horarioRouter.get("/fields/:id/horarios", HorarioController.get);