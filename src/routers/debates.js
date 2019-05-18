const   {Router} = require("express");
const router = Router();

const debates = require('../debates.json');
console.log(debates);

//routes
router.get('/debates', function (req, res) {
	let response = {
		"title": "mi primer debate", 
		"description" : "mi descripcion del debate 1"
	}
	res.json(debates);
 });

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
		console.log("algun parametro esta vacio o mal formado");
		res.send("Worng request");
	 }
	
 });

 module.exports= router;