var mysql = require('mysql2');
var fs = require('fs');
var path = require('path');
require('dotenv').config();

var connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWD,
	database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
	ssl: {
		ca: fs.readFileSync(path.join(__dirname, process.env.DB_SSL)),
	}
});

connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

module.exports = connection;