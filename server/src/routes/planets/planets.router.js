const express = require("express");
const { getAllPlanets } = require("./planets.contloller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
