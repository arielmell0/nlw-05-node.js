import { Router } from "express"
import { getCustomRepository } from "typeorm"

import { SettingsRepository } from "./repositories/SettingsRepository"

const routes = Router()

/**
 * Tipos de parâmetros
 * Routes params => Parâmetros de rotas
 * Query params => Filtros e buscas
 * Body params => {
 * 
 * }
 */

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;

    const settingsRepository = getCustomRepository(SettingsRepository)

    const settings = settingsRepository.create({
        chat, 
        username,
    })

    await settingsRepository.save(settings)

    return response.json(settings)
})

export { routes }

