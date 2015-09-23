var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Bag = require('../models/bag-model.js');

var reciptSchema = new mongoose.Schema({
	sn: String,
    bag: new Bag,
    totalPrice: String,
	created_at: {type: Date, default: Date.now},
    submited_by: String
});

module.exports = mongoose.model('Recipt', reciptSchema);

