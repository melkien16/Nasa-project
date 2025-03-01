const express = require("express");
const cores = require('cors');
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(cors()); //allow all to acess all sites
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
