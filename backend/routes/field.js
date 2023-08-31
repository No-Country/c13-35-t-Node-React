import { Router } from "express";
import { FieldController } from "../controllers/fields.js";

export const fieldRouter = Router()

//Get all fields or by filter
fieldRouter.get("/", FieldController.getAllFields)

//Get field by id
fieldRouter.get("/:id", FieldController.getFieldById) // Path to regex

//Create a new field
fieldRouter.post("/", FieldController.createField)

//Partially update a field
fieldRouter.patch("/:id", FieldController.updateField)

//Delete a field
fieldRouter.delete("/:id", FieldController.deleteField)