//api for item
var express = require('express');
var router = express.Router();

router.route('/item')
	//creates a new item
	.post(function(req, res){
        console.log('i got post new Item request');
        res.send({message:"create a new item in the database"});
	})
	//gets all item
	.get(function(req, res){
		console.log('i got get list all item request');
        res.send({message:"get all item in the database"});
	});

module.exports = router;