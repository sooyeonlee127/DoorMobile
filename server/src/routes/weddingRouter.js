const { Router } = require('express');
const weddingRouter = Router();
const Wedding = require('../models/wedding');

weddingRouter.post('/register', async (req, res) => {
  try {
    const wedding = await new Wedding({
      weddingKey: req.body.weddingKey,
      groom: {
        name: req.body.groom.name,
        groomRoleTypeName: req.body.groom.groomRoleTypeName,
        parents: {
          mother: req.body.groom.mother,
          father: req.body.groom.father,
        },
      },
      bride: {
        name: req.body.bride.name,
        brideRoleTypeName: req.body.bride.brideRoleTypeName,
        parents: {
          mother: req.body.bride.mother,
          father: req.body.bride.father,
        },
      },
      invitationSentence: req.body.invitationSentence,
      weddingDate: req.body.weddingDate,
      weddingTime: req.body.weddingTime,
    }).save();
    res.json({ code: 200, message: '정보가 저장되었습니다.'});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

weddingRouter.get('/info/:weddingKey', async (req, res) => {
  try {
    // if (!mongoose.isValidObjectId(req.params.weddingCode)) throw new Error('올바르지 않은 code입니다.')
    const wedding = await Wedding.find({ weddingKey: req.params.weddingKey });
    res.json({ code: 200, message: '정보가 조회되었습니다.', data: wedding});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = { weddingRouter };
