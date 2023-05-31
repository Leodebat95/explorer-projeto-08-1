// routes (2º/5) --- arquivo por onde as requisições são endereçadas


const { Router } = require('express')

const usersRoutes = Router()


const UsersController = require('../controllers/UsersController')

const usersController = new UsersController()


usersRoutes.post('/', usersController.create)

usersRoutes.put('/:id', usersController.update)


module.exports = usersRoutes
