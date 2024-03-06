const {Router} = require('express');
const clientsRouter = require('./clients.routes.js');
const usersRouter = require('./users.routes.js');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/clients', clientsRouter);

module.exports = routes;