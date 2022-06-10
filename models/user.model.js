
const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		fname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'notes' }
)

const model = mongoose.model('Notes', User)

module.exports = model