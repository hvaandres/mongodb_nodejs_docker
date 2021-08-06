var express = require('express');
const app = require('../app');
var router = express.Router();
var { Todos } = require('../models/todos')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find()
  res.render('index', { title: 'Todos', todos: todo });
});



module.exports = router;
