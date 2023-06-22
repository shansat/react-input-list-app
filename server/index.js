const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "employeeSystem"
})

app.post('/create', (req, res) => {
    console.log("Are you there", req.body)
    const name = req.body.name
    const age = req.body.age
    const country = req.body.country
    const position = req.body.position
    const salary = req.body.salary

    db.query(
        "INSERT INTO employees (name, age, country, position, salary) VALUES (?, ?, ?, ?, ?)",
        [name, age, country, position, salary],
        (err, result) => {
          if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            console.log("Values inserted");
            res.sendStatus(200);
          }
        }
      );
})

app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", 
    (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
          } else {
            res.send(result)
          } 
    }
    )
})

app.listen(3009, () => {
    console.log("Your server is running on port 3009")
})