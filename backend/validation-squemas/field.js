import z from "zod";

const fieldSquema = z.object({
    nombre: z.string({
        invalid_type_error: "El nombre debe ser una cadena de texto",
        required_error: "El nombre es requerido para crear la cancha"
    }).nonempty({message: "El nombre es requerido"}),
    descripcion: z.string(),
    precio: z.number().positive(),
    deporte: z.enum(["futbol", "tenis"]),
    ciudad: z.string({required_error: "La ciudad es requerida"})
})

function validateField(object) {
    return fieldSquema.safeParseAsync(object)
}

function validateFieldUpdate(object) {
    return fieldSquema.partial().safeParseAsync(object)
}

export { validateField, validateFieldUpdate };