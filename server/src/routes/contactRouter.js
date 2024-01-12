const { Router } = require('express');
const contactRouter = Router();
const Contact = require('../models/contact');

contactRouter.post('/register', async (req, res) => {
  try {
    const contact = await new Contact({
      groomContactNumber: req.body.groomContactNumber,
      brideContactNumber: req.body.brideContactNumber,
      weddingKey: req.body.weddingKey,
      contactList: req.body.contactList,
    }).save();
    res.json({ code: 200, message: '정보가 저장되었습니다.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

contactRouter.get('/info/:weddingKey', async (req, res) => {
  try {
    const contact = await Contact.findOne({ weddingKey: req.params.weddingKey });
    res.json({ code: 200, message: '정보가 조회되었습니다.', data: contact});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { contactRouter };
