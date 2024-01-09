const { Router } = require('express');
const contactRouter = Router();
const Contact = require('../models/contact');

contactRouter.post('/register', async (req, res) => {
  try {
    const contact = await new Contact({
      weddingKey: req.body.weddingKey,
      contactList: req.body.contactList,
    }).save();
    res.json({ message: '정보가 저장되었습니다.', contact });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

contactRouter.get('/info/:weddingKey', async (req, res) => {
  try {
    const contact = await Contact.find({ weddingKey: req.params.weddingKey });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { contactRouter };
