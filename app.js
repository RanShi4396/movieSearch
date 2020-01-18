var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/results", function(req,res){
	//APi call
	var query = req.query.search;
	var url = "http://omdapi.com/?s=" + query;
	request("http://omdbapi.com/?s=california", function(error, res, body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			res.render("results", {data: data});
		}
	});
});

app.get("/", function(req,res){
	res.render("search");
})



app.listen(3000, function() { 
	console.log('Server is listening on port 3000'); 
});
