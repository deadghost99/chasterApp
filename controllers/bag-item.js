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