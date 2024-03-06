const {Router} = require('express')
const ClientsController = require('../controllers/ClientsController')
const checkIsAdmin = require('../middlewares/checkIsAdmin')

const clientsRoutes = Router()

const clientsController = new ClientsController()

clientsRoutes.post('/', clientsController.createContacts)
clientsRoutes.get('/:user_id',checkIsAdmin, clientsController.listContacts)

module.exports = clientsRoutes