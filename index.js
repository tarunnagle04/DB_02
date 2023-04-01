const express = require("express");
const bodyParser = require("body-parser");
const employeeRouter = require("./routes/employee");

const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(6000, () => {
    console.log("server is running at port 6000")
})