import express from "express";
import { fieldRouter } from "./routes/field.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express()

//App middlewares
app.disable("x-powered-by")
app.use(express.json())
app.use(corsMiddleware())


//App routes
app.get("/", (req, res) => {
    res.status(200).json({status: "Ok"})
});

app.use("/api/fields", fieldRouter)

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
