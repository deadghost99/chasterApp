/* The item controller
   Exports 3 methods:
   * put - put new Item in Bag By Bag Id and Item Id and qty
   * list - Get list Items data by bag Id
   * update - change qty Item
   * take - Delete Item in Bag
   + clean - Delete all Item in Bag where qty = 0
   * reset - Delete all Item in Bag
*/

var BagItem = require('../models/bag-item.js');

exports.put = function(req, res) {  
    bagItem = new BagItem({bag_id: req.body.bag_id, 
                           item_id: req.body.item_id, 
                           name: req.body.name,
                           about: req.body.about,
                           price: req.body.price,
                           qty: req.body.qty,
                           total: (req.body.price * req.body.qty)
                          });
    bagItem.save(function(err, bagItem) {
        if (err) return handleError(500, err);
        
        return res.json(bagItem);
    });
};

exports.list = function(req, res) {
    BagItem.find(function(err, bagItems) {
        if(err){
            res.send(err);
        };
        console.log(bagItems);
        res.send(bagItems);
    });
};

exports.update = function(req, res) {
    BagItem.findById(req.params.id, function(err, bagItem){
        if(err)
            res.send(err);
        
        bagItem.name= req.body.name;
        bagItem.about= req.body.about;
        bagItem.price= req.body.price;
        bagItem.qty= req.body.qty;
        bagItem.total= (req.body.price * req.body.qty);
        
        bagItem.save(function(err, bagItem){
            if(err)
                res.send(err);
            
            res.json(bagItem);
        });
    });
};

exports.take = function(req, res) {
    BagItem.remove({_id: req.params.id}, function(err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
	});
};

exports.clean = function(req, res) {
    BagItem.remove({bag_id: req.body.bag_id, qty: 0}, function(err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
	});
};

exports.reset = function(req, res) {
    BagItem.remove({bag_id: req.params.id}, function(err) {
        if (err)
            res.send(err);
        res.json("deleted :(");
	});
}