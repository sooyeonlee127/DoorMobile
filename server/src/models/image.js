const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
  {
    weddingKey: { type: String, required: true },
    imageTypeCode: { type: String, required: true, default: false },
    key: { type: String, required: true },
    originalFileName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('image', ImageSchema);
