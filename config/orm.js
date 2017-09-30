var connection = require("./connection.js");

//helper function to format SQL query strings
function setFormat(string,columns,values){
	var rtn = string;
	for (var i = 0; i < columns.length; i++) {
		rtn += " ?? = ? ";
		if(i < columns.length - 1){ rtn += ","}
	}
	return rtn;
}

function makeBindVarArray(columns,values){
	var bindArray = [];
	for (var i = 0; i < columns.length; i++) {
		bindArray.push(columns[i]);
		bindArray.push(values[i]);
	}
	return bindArray;
}

function verifyLen(columns, values){
	if(columns.length !== values.length){
		error.log("mismatch columns and values length.");
		return false;
	}
	return true;
}

var orm = {
	selectAll: function(table, callback){
		var queryString = "SELECT * FROM ??";
		connection.query(queryString,[table],function(err, result){
			callback(result);
		});
	}
	,insertOne: function(table,col,newName,callback){
		var queryString = "INSERT INTO ?? (??) VALUES (?)"
		connection.query(queryString,[table,col,newName],function(err, result){
			callback(result);
		})
	}
	,updateOne: function(table,id,columns,values,callback){
		var queryString = setFormat("UPDATE " + table + " SET", columns, values);
		queryString += " WHERE id = " + id;
		var bindArray = makeBindVarArray(columns,values);
		console.log(queryString);
		connection.query(queryString,bindArray,function(err, result){
			callback(result);
		});	
	}
}

module.exports = orm;