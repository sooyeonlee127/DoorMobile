const { Router } = require('express');
const accountRouter = Router();
const Account = require('../models/account');

accountRouter.post('/register', async (req, res) => {
  try {
    const account = await new Account({
      weddingKey: req.body.weddingKey,
      accountList: req.body.accountList,
    }).save();
    res.json({ message: '정보가 저장되었습니다.', account });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

accountRouter.get('/info/:weddingKey', async (req, res) => {
  try {
    const account = await Account.find({ weddingKey: req.params.weddingKey });
    res.json(account);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { accountRouter };
