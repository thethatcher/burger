var orm = require("../config/orm.js");

var burger = {
	all: function(callback){
		orm.selectAll("burgers", function(result){
			callback(result);
		});
	}
	,create: function(newName,callback){
		orm.insertOne("burgers", "burger_name", newName, function(result){
			callback(result);
		});
	}
	,update: function(id,columns,values,callback){
		orm.updateOne("burgers",id,columns,values,function(result){
			callback(result);
		});
	}
}

module.exports = burger;