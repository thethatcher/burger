var orm = require("./config/orm.js");

orm.selectAll(function(result){
	console.log(result);
});

orm.updateOne("4",["burger_name","devoured"],["Veggie Burger",false], function(result){
	console.log(result);
	console.log("finished update");
});

orm.selectAll(function(result){
	console.log(result);
});