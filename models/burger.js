var orm = require("../config/orm.js");

var burger = {
	all: function(callback){
		orm.selectAll("burgers", function(result){
			callback(result);
		});
	}
	,create: function(col,newName,callback){
		orm.insertOne("burgers", col, newName, function(result){
			callback(result);
		});
	}
	,updateOne: function(id,columns,values,callback){
		orm.updateOne("burgers",id,columns,values,function(result){
			callback(result);
		});
	}
}

module.exports = burger;