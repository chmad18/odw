const { urlencoded, json } = require('express');
const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.json());
var mysql = require('./mysql').pool;

app.get('/persons', (req, res)=>{
    mysql.getConnection(function(err, connection){
        connection.query('SELECT * FROM persons', function(err, result, fields){
            if(err) throw err;
            res.send(result);
            connection.release();
        });
    });
});

app.post('/person', (req, res)=>{
    let firstname = req.body['firstname'];
    let lastname = req.body['lastname'];
    var post = [
        {
            Firstname: firstname,
            Lastname: lastname
        }
    ]

    var sqlString = 'INSERT INTO persons SET ?';

    mysql.getConnection(function(err, connection){
        connection.query(sqlString, post, function(err) {
            if(err) throw err;
            res.sendStatus(200);
            connection.release();
        });
    });
});

app.listen(5000);