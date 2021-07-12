var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'dev',
  password : 'secret',
  database : 'dev'
});

migration.init(connection, __dirname + '/migrations')