var express = require('express');
var router = express.Router();

/* GET users listing. */


var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "cecilia1996",
  database: "ppc"
});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.post('/', urlencodedParser, function(req, res, next) {

  let UID = 1002;
  let Name = req.body.Name;
  let Mobile = req.body.Mobile;

  if (!Name) {
    return res.status(400).send({ error:true, message: 'Please provide user name' });
  }



  db.query("INSERT INTO user_information SET ? ", { UID: UID,Name:Name,Mobile:Mobile,Email:"123@gmail.com",Callback:"0" }, function (error, results, fields) {
    
    if (error) throw error;
    //return res.send({ error: false, data: results, message: 'New user added successfully.' });
    console.log("New user added successfully.");

  });


  res.redirect('http://localhost:3000/Register');

  //res.send(Name);
});





//router.get("/", function(req, res, next) {
//  res.send('respond with a resource');
//});

module.exports = router;
