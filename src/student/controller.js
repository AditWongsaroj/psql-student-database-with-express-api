import pool from "../../db.js";
import * as queries from "./queries.js";
// const pool = require("../../db");
// const queries = require("./queries");

function getStudents(req, res) {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

function getStudentById(req, res) {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
}

function addStudent(req, res) {
  const { name, email, age, dob } = req.body;
  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("Email already exists");
    } else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Student Created Successfully!");
        }
      );
    }
  });
}
function deleteStudent(req, res) {
  const id = parseInt(req.params.id);
  //check if email exists
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("NOT FOUND");
    } else {
      pool.query(queries.deleteStudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student DELETED");
      });
    }
  });
}

function updateStudent(req, res) {
  const id = parseInt(req.params.id);

  const { name } = req.body;

  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    const notFound = !results.rows.length;
    if (notFound) {
      res.send("NOT FOUND");
    } else {
      pool.query(queries.updateStudent, [name, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student updated Succesfully.");
      });
    }
  });
}

export {
  addStudent,
  deleteStudent,
  getStudents,
  getStudentById,
  updateStudent,
};
