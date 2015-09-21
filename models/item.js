var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new mongoose.Schema({
	name: String,
    about: String,
    price: String,
	created_at: {type: Date, default: Date.now},
    lastEdited_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Item', itemSchema);