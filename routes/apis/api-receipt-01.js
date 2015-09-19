//api for item
var express = require('express');
var router = express.Router();

router.route('/receipt')
	//creates a new item
	.post(function(req, res){
        res.send({message:"create a new receipt from bag"});
	})

	//gets all item
	.get(function(req, res){
        res.send({message:"get all receipts"});
	});

router.route('/receipt/:id')
    //get item by id
    .get(function(req, res){
        res.send({message:"get recipt by id: "+ req.params.id +" from databases"});
    })

    //update item
    .post(function(req,res){
        res.send({message:"change data item by id: "+ req.params.id +" at databases"});
    });
module.exports = router;