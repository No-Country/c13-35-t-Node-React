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

            const ciudad = await prisma.ciudad.findFirst({
                where: {nombre: field.ciudad}
            })

            if (ciudad) {

                const newField = await prisma.field.create({
                    data: {
                        nombre: field.nombre,
                        descripcion: field.descripcion,
                        precio: field.precio,
                        deporte: field.deporte,
                        ciudad: {
                            connect: {
                                ciudadId: ciudad.ciudadId
                            }
                        },
                    },
                })
        
                return newField
            } else {
                const newField = await prisma.field.create({
                    data: {
                        nombre: field.nombre,
                        descripcion: field.descripcion,
                        precio: field.precio,
                        deporte: field.deporte,
                        ciudad: {
                            create: {
                                nombre: field.ciudad
                            }
                        },
                    },
                })
        
                return newField
            }
    
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
                            where: { nombre: field.ciudad },
                            data: { nombre: field.ciudad },
                        },
                    },
                },
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