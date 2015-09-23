//api for item
var express = require('express');
var router = express.Router();

var itemCtrl = require('../../controllers/item01.js');

router.route('/item')
	//creates a new item
	.post(function(req, res){
        itemCtrl.create(req,res);
	})

	//gets all item
	.get(function(req, res){
		itemCtrl.list(req,res);
	});

router.route('/item/:id')
    //get item by id
    .get(function(req, res){
        itemCtrl.show(req,res);
    })

    //update item
    .put(function(req,res){
        itemCtrl.update(req,res);
    })

    //delete item
    .delete(function(req,res){
		itemCtrl.delete(req,res);
	});
    
module.exports = router;