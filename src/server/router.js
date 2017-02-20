const express = require('express');
const _ticketController = require('./controllers/_ticket-control.js');
const _todoController = require('./controllers/_todo-control.js');
const _serviceLocationController = require('./controllers/_serviceLocation-controller.js');
const _categoryController = require('./controllers/_category-controller.js');

module.exports = function(app){
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.post('/saveTodo', _todoController.createTodo)
  apiRoutes.get('/getTodo', _todoController.getTodo)
  apiRoutes.get('/getServiceLocation', _serviceLocationController.getServiceLocation)
  apiRoutes.get('/getServiceLocationByCategory', _serviceLocationController.getServiceLocationByCategory)
  apiRoutes.get('/getCategories', _categoryController.getCategories)
  apiRoutes.get('/getNearbyServiceLocation', _serviceLocationController.getNearbyServiceLocation)

  app.use('/api', apiRoutes);
}
