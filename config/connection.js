const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'gzu47w0nxiocmck5',
        password: 'jaqj4437wzjhrgh1',
        database: 'burgers_db'
    });
};
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;