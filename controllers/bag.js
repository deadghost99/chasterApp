/* The item controller
   Exports 3 methods:
   * create - Create new Bag
   * show - Get Bag data by bag Id
   * put - Edit Item data in Bag By Bag Id and Item Id and qty
   * take - Delete Item in Bag
   + clean - Delete all Item in Bag where qty = 0
   * reset - Delete all Item in Bag 
   * delete - Delete bag
*/

var Bag = require('../models/bag.js');


exports.create = function(req, res) {
    
    if(!req.body.totalPrice) req.body.totalPrice = 0;
    
    bag = new Bag({totalprice: req.body.totalPrice});
    bag.save(function(err, bag) {
        if (err) return handleError(500, err);
        
        return res.json(bag);
    });
};