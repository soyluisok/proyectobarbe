const mysql = require('mysql');
const util = require('util');

let pool = mysql.createConnection({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'labarbe'

})
pool.query = util.promisify(pool.query);
console.log("Conexion a la base de datos realizada");

module.exports = pool;