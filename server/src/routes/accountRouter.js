const { Router } = require('express');
const accountRouter = Router();
const Account = require('../models/account');

accountRouter.post('/register', async (req, res) => {
  try {
    const account = await new Account({
      weddingKey: req.body.weddingKey,
      groomAccountList: req.body.groomAccountList,
      brideAccountList: req.body.brideAccountList,
    }).save();
    res.json({ code: 200, message: '정보가 저장되었습니다.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

accountRouter.get('/info/:weddingKey', async (req, res) => {
  try {
    const account = await Account.findOne({
      weddingKey: req.params.weddingKey,
    });
    res.json({ code: 200, message: '정보가 조회되었습니다.', data: account });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { accountRouter };
