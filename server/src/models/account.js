const mongoose = require('mongoose')


const accountSchema = new mongoose.Schema({
    weddingKey: { type: String, required: true, index: true, unique: true },
    accountList: {
        type: mongoose.Schema.Types.Array, items: {
            name: String,
            typeCode: String,
            bank: String,
            number: String
        }
    }
}, { timestamps: false })

module.exports = mongoose.model('account', accountSchema)