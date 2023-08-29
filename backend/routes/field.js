import { Router } from "express";
import { Prisma } from "@prisma/client";
import { prisma } from "../controllers/prisma-controller.js"
import { validateField, validateFieldUpdate } from "../validation-squemas/field.js";

export const fieldRouter = Router()

//Get all fields or by filter
fieldRouter.get("/", async (req, res) => {
    const { deporte, ciudad } = req.query
    if (deporte) {
        const field = await prisma.field.findMany({
            where: {deporte: deporte.toLocaleLowerCase()}
        })
        return res.status(200).json(field)
    }

    if (ciudad) {
        const field = await prisma.field.findMany({
            where: {ciudad: ciudad.toLocaleLowerCase()}
        })

        return res.status(200).json(field)
    }

    const field = await prisma.field.findMany()
    
    res.json(field)
})

//Get field by id
fieldRouter.get("/:id", async (req, res) => { // Path to regex
    const { id } = req.params;
    const parsedId = parseInt(id)

    const field = await prisma.field.findFirst({
        where: {id: parsedId},
    })

    if (field) return res.json(field)

    res.status(404).json({message: "Field Not found"})
})

//Create a new field
fieldRouter.post("/", async (req, res) => {

    const result = await validateField(req.body)
    
    if (result.error) {
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }
    
    const field = result.data

    try {
        const newField = await prisma.field.create({
            data: {
                nombre: field.nombre,
                descripcion: field.descripcion,
                precio: field.precio,
                deporte: field.deporte,
                ciudad: {
                    create: {nombre: field.ciudad}
                }
            }
        })

        res.status(201).json(newField)

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
                return res.status(400).json({error: "Error in the database"})
            }
        }
        throw e
    }
})

//Partially update a field
fieldRouter.patch("/:id", async (req, res) => {
    const { id } = req.params
    const parsedId = parseInt(id)

    const result = await validateFieldUpdate(req.body)
    
    if (result.error) {
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }

    const field = result.data
    
    try {

        const updatedField = await prisma.field.update({
            where: {id: parsedId},
            data: {
                nombre: field.nombre,
                descripcion: field.descripcion,
                precio: field.precio,
                deporte: field.deporte,
                ciudad: field.ciudad
            }
        })

        return res.status(201).json(updatedField)

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2002") {
                return res.status(400).json({error: "Error in the database"})
            }
        }
        throw e
    }
})

fieldRouter.delete("/:id", async (req, res) => {
    const { id } = req.params
    const parsedId = parseInt(id)

    try {
        const deletedField = await prisma.field.delete({
            where: {id: parsedId}
        })

        if (deletedField) {
            return res.status(200).json({message: "Cancha eliminada correctamente"})
        }

    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError) {
            if (e.code === "P2025"){
                return res.status(404).json({message: "Cancha no encontrada"})
            }
        }
    }

    res.status(404).json({message: "Field not found"})
})