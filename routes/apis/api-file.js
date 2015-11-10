//api for file
var express = require('express');
var router = express.Router();

router.route('/file')
	//creates a new file
	.post(function(req, res){
        console.log('data');
        fileCtrl.create(req,res);
	});
/*
	//gets all file
	.get(function(req, res){
		fileCtrl.list(req,res);
	});

router.route('/file/:id')
    //get file by id
    .get(function(req, res){
        fileCtrl.show(req,res);
    })

    //update file
    .put(function(req,res){
        fileCtrl.update(req,res);
    })

    //delete file
    .delete(function(req,res){
		fileCtrl.delete(req,res);
	});
*/
module.exports = router;