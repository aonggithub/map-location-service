const express = require('express');
const _ticketController = require('./controllers/_ticket-control.js');
const _todoController = require('./controllers/_todo-control.js');
const _serviceLocationController = require('./controllers/_serviceLocation-controller.js');

module.exports = function(app){
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.post('/create-new-ticket', _ticketController.createTicket)
  apiRoutes.post('/saveTodo', _todoController.createTodo)
  apiRoutes.get('/getTodo', _todoController.getTodo)
  apiRoutes.get('/getServiceLocation', _serviceLocationController.getServiceLocation)

  app.use('/api', apiRoutes);
}
