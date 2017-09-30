var burger = require("../models/burger.js");
var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
	burger.all(function(result){
		var hbsObj ={burgers: result};
		console.log("get function called");
		console.log(hbsObj);
		res.render("index",hbsObj);
	});
});

router.post("/",function(req,res){

});

router.put("/:id",function(req,res){
	burger.update(req.params.id,["devoured"],[true],function(updateResult){
		burger.all(function(result){
		var hbsObj ={burgers: result};
		console.log("get function called");
		console.log(hbsObj);
		res.render("index",hbsObj);
		});
	});
	
});

module.exports = router;