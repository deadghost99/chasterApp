/* The item controller
   Exports 3 methods:
   * create - Create new Item
   * show - get Item data by id
   * list - get all item data
   * update - Edit item data
   * delete - Delete Item
*/
 
 
var Item = require('../models/item.js');
 
exports.create = function(req, res) {
    console.log('debug 00 ');
    item = new Item({name: req.body.name, about: req.body.about, price: req.body.price});
    item.save(function(err) {
        if (err) return handleError(err);
        
    });
};

exports.show = function(req, res) {
    Item.findById(req.params.id, function(err, item) {
        if(err){
            res.send(err);
        };
        res.json(item);
    })
};

exports.list = function(req, res) {
    Item.find(function(err, items) {
        if(err){
            res.send(err);
        };
        console.log(items);
        res.send(items);
    });
};

exports.update = function(req, res){
    Item.findById(req.params.id, function(err, item){
        if(err)
            res.send(err);
        
        item.name= req.body.name;
        item.about= req.body.about;
        item.price= req.body.price;
        item.lastEdited_at= Date.now;

		item.save(function(err, item){
            if(err)
                res.send(err);
            
            res.json(item);
        });
    });
};

exports.delete = function(req, res) {
    Item.remove({_id: req.params.id}, function(err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
	});
};
