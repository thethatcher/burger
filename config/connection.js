var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "uc13jynhmkss3nve.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wpvsmqxhg6gz8ki1",
  password: "s4srt7qtxvknldrv",
  database: "xu793i5byiv1tf7t"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;