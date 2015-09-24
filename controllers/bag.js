/* The item controller
   Exports 3 methods:
   * create - Create new Bag
   * show - Get Bag data by bag Id
   * lastEdited - change time last_edited
   * delete - Delete bag
*/

var Bag = require('../models/bag.js');
var bagItemCtrl = require('../controllers/bag-item.js');

exports.create = function(req, res) {
    
    if(!req.body.totalPrice) req.body.totalPrice = 0;
    
    bag = new Bag({totalprice: req.body.totalPrice});
    bag.save(function(err, bag) {
        if (err) return handleError(500, err);
        
        return res.json(bag);
    });
};

exports.show = function(req, res) {
    Bag.findById(req.params.id, function(err, bag) {
        if(err){
            res.send(err);
        };
        res.json(bag);
    })
};

exports.lastEdited = function(req, res) {
    Bag.findById(req.params.bagid, function(err, bag) {
        if(err)
            res.send(err);
        
        bag.lastEdited_at = Date.no();
        
        bag.save(function(err, bag){
            if(err)
                res.send(err);
            
            res.json(bag);
        });
    }) 
};

exports.delete = function(req, res) {
    
    bagItemCtrl.reset;
    
    Bag.remove({_id: req.params.id}, function(err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
	});
    
};