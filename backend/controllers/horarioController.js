import { prisma } from './prisma-controller.js'

export class HorarioController {
    // Crear un nuevo horario para un campo
    static async createHorario(req, res) {
        const { horaInicio, horaFin, diaSemana, fieldId } = req.body;
        try {
            const nuevoHorario = await prisma.horario.create({
                data: {
                    horaInicio,
                    horaFin,
                    diaSemana,
                    field: {
                        connect: {
                            id: fieldId
                        },
                    },
                },
            });
            res.status(201).json(nuevoHorario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al crear el horario." });
        }
    }

    // Actualizar un horario existente
    static async updateHorario(req, res) {
        const { id } = req.params;
        const { horaInicio, horaFin, diaSemana } = req.body;
        try {
            const horarioActualizado = await prisma.horario.update({
                where: { id: parseInt(id) },
                data: { horaInicio, horaFin, diaSemana },
            });
            res.status(200).json(horarioActualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al actualizar el horario." });
        }
    }

    // Eliminar un horario por su ID
    // static async deleteHorarioByFieldId(fieldId) {
    //     try {
    //         await prisma.horario.deleteMany({
    //             where: { fieldId: parseInt(fieldId) },
    //         });
    //         res.status(200).json({ message: 'Horarios eliminados correctamente' });
    //     } catch (error) {
    //         console.error(error);
    //         res.status(500).json({ error: "Error al eliminar los horarios." });
    //     }
    // }

    static async deleteHorarioByFieldId(fieldId) {
        try {
            await prisma.horario.deleteMany({
                where: { fieldId: parseInt(fieldId) },
            });
        } catch (error) {
            console.error(error);
        }
    }

}