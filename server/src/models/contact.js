const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    weddingKey: { type: String, required: true, index: true, unique: true },
    groomContactNumber: { type: String, required: true },
    brideContactNumber: { type: String, required: true },
    contactList: {
      type: mongoose.Schema.Types.Array,
      items: {
        name: String,
        memberTypeCode: String,
        number: String,
      },
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model('contact', contactSchema);
