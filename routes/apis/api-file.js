//api for file
var express = require('express');
var router = express.Router();

var fileCtrl = require('../../controllers/file');

router.route('/file')
	.post(fileCtrl.uploadFile)
    .get(fileCtrl.getFile);

router.route('/file/:id')
    .get(fileCtrl.downloadFile)
    .delete(fileCtrl.removeFile);


module.exports = router;