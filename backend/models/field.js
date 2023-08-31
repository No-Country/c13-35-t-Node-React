import { prisma } from "../controllers/prisma-controller.js"
import { Prisma } from "@prisma/client";

export class FieldModel {
    static async getAllFields ({ deporte }) {
        if (deporte) {
            const fields = await prisma.field.findMany({
                where: {deporte: deporte.toLocaleLowerCase()}
            })
            
            return fields
        }
    
        const fields = await prisma.field.findMany()
        
        return fields
    }

    static async getFieldById ({ id }) {
        const parsedId = parseInt(id)
        const field = await prisma.field.findFirst({
            where: {id: parsedId},
        })

        return field
    }

    static async createField ({ field }) {
        try {
            const newField = await prisma.field.create({
                data: {
                    nombre: field.nombre,
                    descripcion: field.descripcion,
                    precio: field.precio,
                    deporte: field.deporte,
                    ciudad: {
                        connectOrCreate: {
                            where: { ciudadNombre: field.ciudad },
                            create: { ciudadNombre: field.ciudad }
                        }
                    }
                }
            })
    
            return newField
    
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    return ({error: "Cancha ya existe"})
                }
            }
            throw e
        }
    }

    static async updateField ({ id, field }) {
        try {
            const parsedId = parseInt(id)
            const updatedField = await prisma.field.update({
                where: {id: parsedId},
                data: {
                    nombre: field.nombre,
                    descripcion: field.descripcion,
                    precio: field.precio,
                    deporte: field.deporte,
                    ciudad: {
                        update: {
                            where: { ciudadNombre: field.ciudad },
                            data: { ciudadNombre: field.ciudad }
                        }
                    }
                }
            })
    
            return updatedField
    
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    return ({error: "Error in the database"})
                }
            }
            throw e
        }
    }

    static async deleteField ({ id }) {
        try {
            const parsedId = parseInt(id)
            const deletedField = await prisma.field.delete({
                where: {id: parsedId}
            })
    
            if (deletedField) {
                return ({message: "Cancha eliminada correctamente"})
            }
    
        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2025"){
                    return ({message: "Cancha no encontrada"})
                }
            }
            throw e
        }
    }
}