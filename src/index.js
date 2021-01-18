const express = require('express');
const app = express(); // objeto app
const mysql = require('mysql')
const cors = require('cors');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbfasi'
})

app.use(cors());
app.use(express.json());

app.get('/' , (req, res) => {
    const query = "SELECT * FROM producto";  
    db.query(query, function(error, results, fields){
      res.json(results)
    });
});

app.post('/' , (req, res) => {
    const obj = req.body
    const query = "INSERT INTO producto SET ?";  
    db.query(query, obj, function(error, results, fields){
       res.json(results.insertId)
    });
});

app.listen(4000, () => {
  console.log("listening")
});
