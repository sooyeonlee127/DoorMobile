const mongoose = require('mongoose')


const mapSchema = new mongoose.Schema({
    weddingKey: { type: String, required: true, index: true, unique: true },
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