var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'database',
    user     : 'root',
    password : '',
    database : 'db'
});

exports.pool = pool;