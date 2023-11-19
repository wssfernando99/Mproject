const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app =  express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "autism_db"
})

app.post("/register", (req,res) =>{
    const sql = "INSERT INTO register (`username`, `email`, `password`) VALUES (?)";
    const Values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [Values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        else{
            return res.json(data);
        }
    })
})




app.listen(8083 , ()=>{
    console.log("listening")
})