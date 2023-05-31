// routes (2º/5) --- arquivo por onde as requisições são endereçadas


const { Router } = require('express')

const TagsController = require('../controllers/TagsController')

const tagsController = new TagsController()

const tagsRoutes = Router()


tagsRoutes.get('/:user_id', tagsController.index)


module.exports = tagsRoutes
