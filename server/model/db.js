const mysql = require("mysql");

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3700,
    user: "root",
    password: "1234567890Db",
    database: "socdb",
    insecureAuth: true,
  },
  function (err) {
    if (err) throw err;
    console.log("Connected!");
  }
);

module.exports = db;
