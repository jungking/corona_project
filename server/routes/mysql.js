var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'example'
});

conn.connect();

conn.query('SELECT * FROM topic', function(err,results,fields){
    if(err){
        console.log(err);
    }
    console.log(results);
});

conn.end();