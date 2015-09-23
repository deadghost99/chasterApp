/* The item controller
   Exports 3 methods:
   * create - Create new Item
   * update - Edit item data
   * delete - Delete Item
   * show - get Item data by id
   * list - get all item data
*/
 
 
var Item = require('../models/item.js');
 
exports.create = function(req, res) {
    item = new Item({name: req.body.name, about: req.body.about, price: req.body.price});
    item.save(function(err) {
        if (err) return handleError(err);
    });
};

exports.list = function(req, res) {
    Item.find(function(err, items) {
        if(err){
            res.send(err);
        };
        res.send(items);
    });
};

exports.show = (function(req, res) {
    Item.findById(req.params.id, function(err, item) {
        if(err){
            res.send(err);
        };
        res.json(item);
    })
});