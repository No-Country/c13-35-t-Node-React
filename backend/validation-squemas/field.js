import z from "zod";
import { Deportes } from "@prisma/client";

const fieldSquema = z.object({
    nombre: z.string({
        invalid_type_error: "El nombre debe ser una cadena de texto",
        required_error: "El nombre es requerido para crear la cancha"
    }).nonempty({message: "El nombre es requerido"}),
    descripcion: z.string(),
    precio: z.number().positive(),
    deporte: z.enum(["futbol", "tenis", "basquet"]),
    ciudad: z.string({required_error: "La ciudad es requerida"}),
    valoracion: z.number().positive().max(5, "La valoración no puede ser mayor a 5"),
    url: z.string(),
    servicios: z.array(z.string())
})

const sports = Object.keys(Deportes);
const sportsEnum = z.enum(sports);

function validateField(object) {
    return fieldSquema.safeParseAsync(object)
}

function validateFieldUpdate(object) {
    return fieldSquema.partial().safeParseAsync(object)
}

function validateSports(object) {
    return sportsEnum.safeParseAsync(object)
}

export { validateField, validateFieldUpdate, validateSports };