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
    new Item({title: req.body.title, author: req.body.author}).save();
};