import express from "express";
import studentRoutes from "./src/student/routes.js";
// const express = require("express");
// const studentRoutes = require();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => console.log(`app listing on local host ${port} `));
