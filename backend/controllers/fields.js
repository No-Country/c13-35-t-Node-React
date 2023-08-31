import { FieldModel } from "../models/field.js";
import { validateField, validateFieldUpdate } from "../validation-squemas/field.js";

export class FieldController {
    static async getAllFields (req, res)  {
        const { deporte, ciudad } = req.query
        const fields = await FieldModel.getAllFields({ deporte })
    
        if (!fields) return res.status(404).json({message: "No hay canchas para mostrar"})
        res.status(200).json(fields)
    }

    static async getFieldById (req, res) {
        const { id } = req.params;
        const field = await FieldModel.getFieldById({ id })

        if (field) return res.status(200).json(field)

        res.status(404).json({message: "Cancha no encontrada"})
    }

    static async createField (req, res) {
        const result = await validateField(req.body)
    
        if (result.error) {
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }
        
        const field = result.data

        const newField = await FieldModel.createField({ field })

        if (!newField) return res.status(400).json({error: "Error al crear la cancha"})

        res.status(201).json(newField)
    }

    static async updateField (req, res) {
        const { id } = req.params
        const result = await validateFieldUpdate(req.body)
        
        if (result.error) {
            return res.status(400).json({error: JSON.parse(result.error.message)})
        }

        const field = result.data
        
        const updatedField = await FieldModel.updateField({ id, field })

        if (!updatedField) return res.status(400).json({error: "No se pudo editar la cancha"})

        res.status(201).json(updatedField)
    }

    static async deleteField (req, res) {
        const { id } = req.params
        const deletedField = await FieldModel.deleteField({ id })

        if (!deletedField) return res.status(404).json({error: "Algo ha salido mal al momento de eliminar"})
        res.status(200).json(deletedField)
    }
}