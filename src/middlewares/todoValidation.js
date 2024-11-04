const Joi = require("joi");

const todoListSchema = Joi.object({
  title: Joi.string().required().min(3).max(50).message({
    "any.required": "Title is required",
    "string.max": "Title should be less than 50 characters",
    "string.min": "Title should be more than 3 characters",
  }),
  description: Joi.string().allow(null, "").max(100).messages({
    "string.max": "Description should not exceed 100 characters",
  }),
  status: Joi.string().valid("incomplete", "complete").messages({
    "any.only": "Status must be either 'incomplete' or 'complete'",
  }),
});

const validateTodo = (req, res, next) => {
  const { error } = todoListSchema.validate(req.body);
  console.log("error->", error);
  if (error) {
    return res.status(400).json({ data: { error: error.details[0].message } });
  }
  next();
};

module.exports = validateTodo;
