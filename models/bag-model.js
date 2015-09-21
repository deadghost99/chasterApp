var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Item = require('../models/item-model.js');

var bagSchema = new mongoose.Schema({
	sn: String,
    items: [{item: new Item , quantity: Number}],
    price: String,
	created_at: {type: Date, default: Date.now},
    lastEdited_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Bag', bagSchema);