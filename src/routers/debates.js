const   {Router} 	= require("express");
const 	router 		= Router();
const 	debates 	= require('../debates.json');

const 	underscore 	= require('underscore');
var mysql = require('mysql');
/*
var con = mysql.createConnection({
  host: "localhost:3306", //sh-europe2716 , 11.78.0.27 ,  localhost:3306
  user: "qgmsenxs_elena",
  password: "CuentaElena5",
  database: "qgmsenxs_shakeit"
});*/



//routes
router.get('/debates', function (req, res,next) {
	res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	/*con.connect(function(err) {
		if (err) throw err;
		con.query("SELECT * FROM debate", function (err, result, fields) {
		  if (err) throw err;
		  res.json(result);
		});
	  });*/
	res.json(debates);
 });


 //create debate
 router.post('/debates', function (req, res) {
	 const {title, description, ok_vote, ko_vote, created_date} = req.body;
	 if (title && description && (ok_vote ||  ko_vote) && created_date){
		const id = debates.length +1;
		console.log("id: " + id);
		const newDebate = {...req.body,id};
		console.log(newDebate);
		debates.push(newDebate);
		res.json(debates);
	 }else{
		console.log("Some params is empty or wrong");
		res.send("Worng request");
	 }
	
 });

 //update
 router.put('/debates/:id', function (req, res) {
	const {title, description, ok_vote, ko_vote, created_date} = req.body;
	const {id }= req.params;
	if (title && description && (ok_vote ||  ko_vote) && created_date){
		underscore.each(debates, (debate, i) => {
			if (debate.id == id){
				debate.title = title;
				debate.description = description;
				debate.ok_vote = ok_vote;
				debate.ko_vote = ko_vote;
				debate.created_date = created_date;
			}
		});
	   res.json(debates);
	}else{
	   console.log("Some params is empty or wrong");
	   res.status(500).json({"error" : "All the fields are required"});
	}
   
});


//remove debate
 router.delete('/debates/:id', function (req, res) {
	const {id }= req.params;
	underscore.each(debates, (debate, i) => {
		if (debate.id == id){
			debates.splice(i,1);
		}
	});
	res.json(debates);
	});

 module.exports= router;