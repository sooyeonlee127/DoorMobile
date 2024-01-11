const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    weddingKey: { type: String, required: true },
    nickname: { type: String, required: true },
    password: { type: String, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', commentSchema);
