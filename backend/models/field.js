import { prisma } from "../controllers/prisma-controller.js"
import { Prisma } from "@prisma/client";

export class FieldModel {
    static async getAllFields({ deporte, ciudad }) {

        if (ciudad && !deporte) {
            const cityToFind = await prisma.ciudad.findFirst({
                where: { nombre: ciudad }
            })

            if (!cityToFind) {
                return ({ message: "Ciudad no encontrada" })
            }

            const fields = await prisma.field.findMany({
                where: {
                    ciudad: { ciudadId: cityToFind.ciudadId }
                },
                include: { ciudad: true }
            })

            return fields
        }


        if (deporte && !ciudad) {

            const fields = await prisma.field.findMany({
                where: { deporte: deporte.toLocaleLowerCase() }
            })

            return fields
        }

        if (ciudad && deporte) {
            const cityToFind = await prisma.ciudad.findFirst({
                where: { nombre: ciudad }
            })

            if (!cityToFind) {
                return ({ message: "Ciudad no encontrada" })
            }

            const fields = await prisma.field.findMany({
                where: {
                    AND: [
                        { deporte: deporte.toLocaleLowerCase() },
                        {
                            ciudad: {
                                ciudadId: cityToFind.ciudadId
                            },
                        },
                    ]
                },
                include: {
                    ciudad: true
                }
            })

            return fields
        }

        const fields = await prisma.field.findMany({
            include: { ciudad: true }
        })

        return fields
    }

    static async getFieldById({ id }) {
        const parsedId = parseInt(id)
        const field = await prisma.field.findFirst({
            where: { id: parsedId },
        })

        return field
    }

    static async getAllFieldsWithHorarios({ deporte, ciudad }) {
        let whereConditions = {};

        if (ciudad && !deporte) {
            const cityToFind = await prisma.ciudad.findFirst({
                where: { nombre: ciudad }
            });

            if (!cityToFind) {
                return [];
            }

            whereConditions = {
                ciudad: { ciudadId: cityToFind.ciudadId }
            };
        }

        if (deporte && !ciudad) {
            whereConditions = {
                deporte: deporte.toLocaleLowerCase()
            };
        }

        if (ciudad && deporte) {
            const cityToFind = await prisma.ciudad.findFirst({
                where: { nombre: ciudad }
            });

            if (!cityToFind) {
                return [];
            }

            whereConditions = {
                AND: [
                    { deporte: deporte.toLocaleLowerCase() },
                    {
                        ciudad: {
                            ciudadId: cityToFind.ciudadId
                        },
                    },
                ]
            };
        }

        const fields = await prisma.field.findMany({
            where: whereConditions,
            include: {
                ciudad: true,
                horarios: true,
            },
        });

        return fields;
    }


    static async getFieldByIdWithHorarios({ id }) {
        const parsedId = parseInt(id);
        const field = await prisma.field.findFirst({
            where: { id: parsedId },
            include: { horarios: true },
        });

        return field;
    }

    static async createField({ field, horarios }) {

        console.log(field)

        try {

            /* const ciudad = await prisma.ciudad.findFirst({
                where: {nombre: field.ciudad}
            }) */

            // Comentado para actualizar a la creación de horarios
            // const newField = await prisma.field.create({
            //     data: {
            //         nombre: field.nombre,
            //         descripcion: field.descripcion,
            //         precio: field.precio,
            //         deporte: field.deporte,
            //         valoracion: field.valoracion,
            //         url: field.url,
            //         servicios: field.servicios,
            //         ciudad: {
            //             connectOrCreate: {
            //                 where: {
            //                     nombre: field.ciudad
            //                 },
            //                 create: {
            //                     nombre: field.ciudad
            //                 }
            //             }
            //         },
            //     },
            // })

            // Bloque de código anterior con la actualización para crear los horarios si existen
            const newFieldData = {
                nombre: field.nombre,
                descripcion: field.descripcion,
                precio: field.precio,
                deporte: field.deporte,
                valoracion: field.valoracion,
                url: field.url,
                servicios: field.servicios,
                ciudad: {
                    connectOrCreate: {
                        where: {
                            nombre: field.ciudad
                        },
                        create: {
                            nombre: field.ciudad
                        }
                    }
                },
            };

            if (horarios && Array.isArray(horarios)) {
                newFieldData.horarios = {
                    create: horarios.map((horario) => ({
                        horaInicio: horario.horaInicio,
                        horaFin: horario.horaFin,
                        diaSemana: horario.diaSemana,
                    }))
                };
            }

            const newField = await prisma.field.create({
                data: newFieldData,
            });

            return newField
            /* else {
               const newField = await prisma.field.create({
                   data: {
                       nombre: field.nombre,
                       descripcion: field.descripcion,
                       precio: field.precio,
                       deporte: field.deporte,
                       valoracion: field.valoracion,
                       url: field.url,
                       servicios: field.servicios,
                       ciudad: {
                           create: {
                               nombre: field.ciudad
                           }
                       },
                   },
               })
       
               return newField
           } */

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    return ({ error: "Cancha ya existe" })
                }
            }
            throw e
        }
    }

    static async updateField({ id, field }) {
        try {
            const parsedId = parseInt(id)
            const updatedFieldData = {
                nombre: field.nombre,
                descripcion: field.descripcion,
                precio: field.precio,
                deporte: field.deporte,
                valoracion: field.valoracion,
                url: field.url,
                servicios: field.servicios,
                ciudad: {
                    update: {
                        where: { nombre: field.ciudad },
                        data: { nombre: field.ciudad },
                    },
                },
            };

            if (field.horarios && Array.isArray(field.horarios)) {
                // Elimina los horarios existentes
                await prisma.horario.deleteMany({
                    where: {
                        fieldId: parsedId
                    },
                });

                await prisma.horario.createMany({
                    data: field.horarios.map((horario) => ({
                        horaInicio: horario.horaInicio,
                        horaFin: horario.horaFin,
                        diaSemana: horario.diaSemana,
                        fieldId: parsedId,
                    })),
                });
            }

            const updatedField = await prisma.field.update({
                where: { id: parsedId },
                data: updatedFieldData,
            });

            return updatedField;

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2002") {
                    return ({ error: "Error in the database" })
                }
            }
            throw e
        }
    }

    static async deleteField({ id }) {
        try {
            const parsedId = parseInt(id)
            const deletedField = await prisma.field.delete({
                where: { id: parsedId }
            })

            if (deletedField) {
                return ({ message: "Cancha eliminada correctamente" })
            }

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                if (e.code === "P2025") {
                    return ({ message: "Cancha no encontrada" })
                }
            }
            throw e
        }
    }
}