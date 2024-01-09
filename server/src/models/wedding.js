const mongoose = require('mongoose');

const weddingSchema = new mongoose.Schema(
  {
    weddingKey: { type: String, required: true, index: true, unique: true },
    groom: {
      name: { type: String, required: true },
      groomRoleTypeName: { type: String, required: true },
      parents: {
        mother: { type: String, required: false },
        father: { type: String, required: false },
      },
    },
    bride: {
      name: { type: String, required: true },
      brideRoleTypeName: { type: String, required: true },
      parents: {
        mother: { type: String, required: false },
        father: { type: String, required: false },
      },
    },
    invitationSentence: { type: String, required: true },
    weddingDate: { type: String, required: true },
    weddingTime: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('wedding', weddingSchema);
