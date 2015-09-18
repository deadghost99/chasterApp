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

router.route('/item/:id')
    //get item by id
    .get(function(req, res){
        res.send({message:"get item by id: "+ req.params.id +" from databases"});
    })

    //update item
    .put(function(req,res){
        res.send({message:"change data item by id: "+ req.params.id +" at databases"});
    })

    //delete item
    .delete(function(req,res){
		return res.send({message:'delete an existing item by using param id: ' + req.params.id})
	});
    
module.exports = router;