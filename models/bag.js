var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var bagSchema = new mongoose.Schema({
    totalPrice: String,
	created_at: {type: Date, default: Date.now},
    lastEdited_at: {type: Date, default: Date.now},
    checkout: {type: Boolean, default: false}
});

module.exports = mongoose.model('Bag', bagSchema);