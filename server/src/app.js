const express = require("express");
const cors = require("cors");
const path = require("path");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

app.use(cors()); //allow all to acess all sites

// app.use(
//   cors({
//     origin: "http://localhost:8000",
//   })
// ); // for specific origin

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use(planetsRouter);

module.exports = app;
