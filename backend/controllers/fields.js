import { prisma } from './prisma-controller.js'
import { FieldModel } from "../models/field.js";
import { validateField, validateFieldUpdate, validateSports } from "../validation-squemas/field.js";
import { HorarioController } from '../controllers/horarioController.js'

export class FieldController {
    static async getAllFields(req, res) {
        const { deporte, ciudad } = req.query

        if (deporte) {
            const result = await validateSports(deporte)
            console.log(result)
            if (result.error) {
                return res.status(400).json({ error: JSON.parse(result.error.message) })
            }
        }

        const fieldsWithHorarios = await FieldModel.getAllFieldsWithHorarios({ deporte, ciudad });

        if (!fieldsWithHorarios || fieldsWithHorarios.length === 0) {
            return res.status(404).json({ message: "No hay canchas para mostrar" });
        }
        
        res.status(200).json(fieldsWithHorarios);
    }

    static async getFieldById(req, res) {
        const { id } = req.params;
        const field = await FieldModel.getFieldByIdWithHorarios({ id })

        if (field) return res.status(200).json(field)

        res.status(404).json({ message: "Cancha no encontrada" })
    }

    static async createField(req, res) {

        console.log(req.body)
        const result = await validateField(req.body)

        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const field = result.data

        try {

            const newField = await FieldModel.createField({ field, horarios: req.body.horarios });

            const createdFieldWithHorarios = await FieldModel.getFieldByIdWithHorarios({ id: newField.id })

            res.status(201).json(createdFieldWithHorarios)

        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Error al crear la cancha" })
        }
    }

    static async updateField(req, res) {
        console.log("Datos recibidos en req.body:", req.body);

        const { id } = req.params
        const result = await validateFieldUpdate(req.body)

        if (result.error) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const field = result.data

        try {
            const parsedId = parseInt(id);
            console.log("ParsedId:", parsedId);
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
                // Actualiza los horarios existentes o crea nuevos si no existen
                await prisma.horario.upsert({
                    where: { id: parsedId },
                    create: field.horarios.map((horario) => ({
                        horaInicio: horario.horaInicio,
                        horaFin: horario.horaFin,
                        diaSemana: horario.diaSemana,
                        fieldId: parsedId,
                    })),
                    update: field.horarios.map((horario) => ({
                        where: { id: horario.id },
                        data: {
                            horaInicio: horario.horaInicio,
                            horaFin: horario.horaFin,
                            diaSemana: horario.diaSemana,
                            fieldId: parsedId,
                        },
                    })),
                });
            }

            const updatedField = await prisma.field.update({
                where: { id: parsedId },
                data: updatedFieldData,
                include: { horarios: true },
            });

            res.status(201).json(updatedField)
        } catch (error) {
            console.error(error)
            res.status(500).json({ error: "Error al actualizar la cancha." })
        }
    }

    static async deleteField(req, res) {
        const { id } = req.params
        const deletedField = await FieldModel.deleteField({ id })

        if (!deletedField) return res.status(404).json({ error: "Algo ha salido mal al momento de eliminar" })
        res.status(200).json(deletedField)
    }

}