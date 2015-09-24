var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var bagItemSchema = new mongoose.Schema({
    bag_id: String,
    item_id: String,
    name: String,
    about: String,
    price: Number,
    qty: {type:Number, default:1},
    total: Number,
	input_at: {type: Date, default: Date.now},
    lastEdited_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('BagItem', bagItemSchema);