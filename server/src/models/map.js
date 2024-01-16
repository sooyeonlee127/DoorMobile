const mongoose = require('mongoose')


const mapSchema = new mongoose.Schema({
    weddingKey: { type: String, required: true, index: true, unique: true },
    address: { type: String, required: true },
    locationName: { type: String, required: false },
    directionList: {
        type: mongoose.Schema.Types.Array, items: {
            wayTypeName: String,
            wayContent: String,
        }
    },
    center: {
        latitude: Number,
        longitude: Number
    }
}, { timestamps: false })

module.exports = mongoose.model('map', mapSchema)