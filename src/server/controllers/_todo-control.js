'use strict';
const Todo = require('../models/todo');

exports.createTodo = function(req, res, next){
   const todos = req.body.todos;

   console.log(req.body);
   console.log(todos);

   if (!todos) {
     return res.status(422).send({ error: 'You must enter a todos!'});
   }

   let todoArray = [];

   todos.forEach(function(value){
     let todoObj = new Todo({
       id: value.id,
       text: value.text
     });

     todoArray.push(todoObj.toObject());

   });

   // Remove all todo before do insertion
   Todo.remove({}, function(err) {
      if(err) {return next(err);}

      Todo.collection.insert(todoArray, function(err, docs) {
         if(err) {return next(err);}

         res.status(201).json({ message: "Thanks! Your request was submitted successfuly!"});
         next();
     })

   })
}

exports.getTodo = function(req, res, next){

  Todo.find({}, function(err, todos){
    if(err) {return next(err);}
    res.status(200).json({ message: "Thanks! Your request was displayed successfuly!"
                        , data: todos})
    next();
  })
}
