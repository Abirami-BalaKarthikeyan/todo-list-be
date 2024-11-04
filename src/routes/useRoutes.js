const express = require("express");
const todoControllers = require("../controllers/useControllers");
const validateTodo = require("../middlewares/todoValidation");

const router = express.Router();

router
  .get("/", todoControllers.getAllList)
  .get("/:id", todoControllers.getListById)
  .post("/", validateTodo, todoControllers.createList)
  .put("/:id", validateTodo, todoControllers.updateList)
  .delete("/:id", todoControllers.deleteList);

module.exports = router;
