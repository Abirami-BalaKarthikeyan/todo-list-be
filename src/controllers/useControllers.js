const todoListService = require("../services/todoListService");

const getAllList = async (req, res) => {
  const todoList = await todoListService.getAllTodoList();
  res.status(200).json(todoList);
};

const getListById = async (req, res) => {
  const todoList = await todoListService.getListTodoById(req.params.id);
  if (todoList) {
    res.status(200).json(todoList);
  } else {
    res.status(404).json({ message: "To do List Not found" });
  }
};

const createList = async (req, res) => {
  const newList = await todoListService.createTodoList(req.body);
  res.status(201).json(newList);
};

const updateList = async (req, res) => {
  const updateData = await todoListService.updateTodoList(
    req.params.id,
    req.body
  );
  if (updateData) {
    res.status(200).json(updateData);
  } else {
    res.status(404).json({ message: "To do List Not found" });
  }
};

const deleteList = async (req, res) => {
  const deleteData = await todoListService.deleteTodoList(req.params.id);
  if (deleteData) {
    res
      .status(200)
      .json({ message: `To do List ${req.params.id} deleted successfully` });
  } else {
    res.status(404).json({ message: "To do List Not found" });
  }
};

module.exports = {
  getAllList,
  getListById,
  createList,
  updateList,
  deleteList,
};
