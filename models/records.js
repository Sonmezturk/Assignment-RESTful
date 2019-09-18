const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema=Schema({
	key: {
		type: String,
		required: true,
		unique: true
	},
	value: {
		type: String,
		required: true
	},
	crearedAt: {
		type: Date,
		required: true
	},
	counts: {
		type: Array,
		required: true
	}
},{strict: false});

schema.set("toJSON", {
	transform: function(doc, ret, options) {
		ret.id = ret._id;
		delete ret.__v;
		delete ret._id;
		return ret;
	}
});

module.exports=mongoose.model("Record",schema);
