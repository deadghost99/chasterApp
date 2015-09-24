var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


var bagSchema = new mongoose.Schema({
	sn: String,
    items: [{item: {
                        _id: String,
                        name: String,
                        price: Number;
                    },
             quantity: Number, 
             total: Number;
            }],
    price: String,
	created_at: {type: Date, default: Date.now},
    lastEdited_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Bag', bagSchema);