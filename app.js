const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const loggerMiddleware = require("./src/middlewares/loggerMiddleware");
const routes = require("./src/routes/useRoutes");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/todo", routes);
app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
