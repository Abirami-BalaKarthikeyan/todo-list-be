const Todo = require("../models/todo");

const getAllTodoList = async () => {
  const getUser = await Todo.findAll();
  return getUser;
};

const getListTodoById = async (id) => {
  const getUser = await Todo.findByPk(id);
  return getUser;
};

const createTodoList = async (todoData) => {
  return await Todo.create(todoData);
};

const updateTodoList = async (id, todoData) => {
  const todo = await Todo.findByPk(id);
  if (todo) {
    return await todo.update(todoData);
  }
  return null;
};

const deleteTodoList = async (id) => {
  const todo = await Todo.findByPk(id);
  if (todo) {
    return await todo.destroy();
  }
  return null;
};
module.exports = {
  getAllTodoList,
  getListTodoById,
  createTodoList,
  updateTodoList,
  deleteTodoList,
};
