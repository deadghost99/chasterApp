//Controller
var Busboy = require('busboy');
var Grid = require('gridfs-stream');
var mongoose = require('mongoose');

exports.uploadFile = function(req, res) {
    
    var busboy = new Busboy({ headers : req.headers });
    var gfs = Grid(mongoose.connection.db, mongoose.mongo);
    var fileId = new mongoose.mongo.ObjectId();
    var fileName;

    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
        console.log('got file', filename, mimetype, encoding);
        var writeStream = gfs.createWriteStream({
          _id: fileId,
          filename: filename,
          mode: 'w',
          content_type: mimetype,
        });
        fileName = filename;
        file.pipe(writeStream);
    }).on('finish', function() {
        res.status(200).send({fileId: fileId, filename: fileName , status: 'succese'});
    }).on('error', function(e) {
        res.status(500).send("Upload failed");
    });

    req.pipe(busboy);
    
};


exports.getFile = function(req, res){
    
    var gfs = Grid(mongoose.connection.db, mongoose.mongo);
    
    gfs.files.find({},{filename:true, contentType: true, length: true}).toArray(function (err, files) {
        if (err) return res.status(400).send(err);
        if (!files) return res.status(404).send('');

        res.send(files);
    });
};

exports.downloadFile = function(req, res){
    
    var gfs = Grid(mongoose.connection.db, mongoose.mongo);
    
    gfs.findOne({ _id: req.params.id }, function (err, file) {
    if (err) return res.status(400).send(err);
    if (!file) return res.status(404).send('');

    res.set('Content-Type', file.contentType);
    res.set('Content-Disposition', 'attachment; filename="' + file.filename + '"');

    var readstream = gfs.createReadStream({
      _id: file._id
    });

    readstream.on("error", function(err) {
      console.log("Got error while processing stream " + err.message);
      res.end();
    });

    readstream.pipe(res);
  });
}

exports.removeFile = function(req, res){
    
    var gfs = Grid(mongoose.connection.db, mongoose.mongo);
        
    gfs.remove({ _id: req.params.id }, function (err, file) {
        if (err) {
            res.status(500).send("remove file failed");
            return handleError(err);
        };
        res.status(200).send({fileId: file._id, filename: file.fileName , status: 'removed'});
    });
};
