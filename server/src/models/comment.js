const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    weddingKey: { type: String, required: true, index: true, unique: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: false }
);

module.exports = mongoose.model('comment', commentSchema);
