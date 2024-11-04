const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM("incomplete", "complete"),
    allowNull: false,
    defaultValue: "incomplete",
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Todo;
