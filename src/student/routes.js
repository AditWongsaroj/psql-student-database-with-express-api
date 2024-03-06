import Router from "express";
import * as controller from "./controller.js";

// const { Router } = require("express");

const router = Router();

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.delete("/:id", controller.deleteStudent);
router.put("/:id", controller.updateStudent);

export default router;
