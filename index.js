const app = require("./app");
const sequelize = require("./src/config/db");
const port = 3000;
sequelize.sync({ force: false, alter: false });
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
