const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
    user: {
        _id: { type: mongoose.Types.ObjectId, required: true, index: true },
        name: { type: String, required: true },
        username: { type: String, required: true },
    },
    address: { type: String, required: true },
    placename: { type: String, required: true },
    bus: { type: String },
    subway: { type: String },
    date: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('info', InfoSchema)