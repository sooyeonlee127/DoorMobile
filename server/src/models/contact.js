const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true, unique: true },
    contactList: {
        type: mongoose.Schema.Types.Array, items: {
            name: String,
            typeCode: String,
            number: String
        }
    }
}, { timestamps: false })

module.exports = mongoose.model('contact', contactSchema)