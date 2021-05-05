import express from "express"

import "./database"

const app = express()

/**
 * Métodos
 
 * GET = Buscas
 * POST = Criar
 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração especifíca
 */

app.get("/", (request, response) => {
    return response.json({
        message: "Olá mundo GET!"
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Olá mundo POST!"
    })})

app.listen(3333, () => console.log("Server is running on port 3333"))