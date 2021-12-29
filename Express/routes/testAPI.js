var express = require("express");
var router = express.Router();


var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cecilia1996",
  database: "ppc"
});

router.get("/", function(req, res, next) {

    //var sql = "INSERT INTO user_information (UID,Name,Email,Mobile,Callback) VALUES (1002,'Name 1','name1@gmail.com','0426801696','0')";

    //let UID = req.body.UID;

    var sql = "SELECT * FROM user_information";
    //var sql = "SELECT * FROM user_information WHERE UID = ?";
    db.query(sql, function (err, result) {
    //db.query(sql, [UID] ,function (err, result) {
        if (err) throw err;

        console.log("1 record founded");   
        res.send(result);
    });

    //res.send("API and SQL is working properly");
});

module.exports = router;