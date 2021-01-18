const express = require('express');
const app = express(); // objeto app
const cors = require('cors');
const db = require('./database');

app.set('port', process.env.PORT || 4000 );

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

app.listen(app.get('port'), () => {
  console.log("listening")
});
