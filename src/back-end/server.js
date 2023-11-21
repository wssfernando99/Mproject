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
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        else{
            return res.json(data);
        }
    })
})


app.post("/login", (req, res) =>{
    const sql = "SELECT * FROM register WHERE `email` = ? AND `password` = ? ";
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        else if (data.length > 0){
            return res.json("Success");
        }
        else{
            return res.json("Fail");
        }
    })
})




app.listen(8083 , ()=>{
    console.log("listening")
})