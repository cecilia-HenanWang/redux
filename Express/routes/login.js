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

    let Name = req.body.Name;
    let Mobile = req.body.Mobile;

    if (Name && Mobile) {
		db.query('SELECT * FROM user_information WHERE Name = ? AND Mobile = ?', [Name, Mobile], function(error, results, fields) {
			
            if (error) throw error;

            if (results.length>0) {

				//request.session.loggedin = true;
				//request.session.username = username;
				res.send(results);
                //res.redirect('/Account');

			} else {

				res.send({message :'Incorrect Username and/or Password!'});
			}

			res.end();
		});
	} else {
		res.send({message:'Please enter Username and Password!'});
		res.end();
	}
  


});


//router.get("/", function(req, res, next) {
 // res.send('respond with login');
//});
  
module.exports = router;
  