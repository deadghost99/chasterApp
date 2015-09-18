//api for item
var express = require('express');
var router = express.Router();

router.route('/bag')
	//creates a new bag
	.post(function(req, res){
        res.send({message:"add new bag"});
	});

router.route('/bag/:id')
    //get bag by id
    .get(function(req, res){
        res.send({message:'get bag by id: '+ req.params.id +' and all its items from databases'});
    });

router.route('/bag/:id/:item_id/:qty')
    //update quantity item at bag
    .put(function(req,res){
        res.send({message:'change item with id: '+ req.params.item_id +' quantity to: '+ req.params.qty +' at bag with id: '+ req.params.id +' at databases'});
    });

router.route('/bag/:id/:item_id')
    //add item to bag
    .put(function(req,res){
        return res.send({message:'add an item with id: '+ req.params.item_id +' to bag '+ req.params.id});
    })
    //delete item at bag
    .delete(function(req,res){
		return res.send({message:'delete an existing item by id: ' + req.params.item_id+ ' in bag with id:'+ req.params.id});
	});
    
module.exports = router;