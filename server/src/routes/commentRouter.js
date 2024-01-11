const { Router } = require('express');
const commentRouter = Router();
const Comment = require('../models/comment');
const mongoose = require('mongoose');

commentRouter.post('/insert', async (req, res) => {
  try {
    if (req.body.password.length < 4)
      throw new Error('비밀번호를 최소 4자 이상으로 해주세요.');
    if (req.body.nickname.length < 1)
      throw new Error('닉네임은 1자 이상으로 해주세요.');
    if (req.body.comment.length < 1)
      throw new Error('방명록은 1자 이상으로 해주세요.');
    const comment = await new Comment({
      weddingKey: req.body.weddingKey,
      nickname: req.body.nickname,
      password: req.body.password,
      comment: req.body.comment,
    }).save();
    res.json({ code: 200, message: '방명록이 등록되었습니다.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

commentRouter.delete('/delete', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.body.commentId))
      throw new Error('올바르지 않은 방명록 id입니다.');
    const comment = await Comment.findOne({ _id: req.body.commentId });
    if (!comment)
      return res.json({ message: '요청하신 방명록은 이미 삭제되었습니다.' });
    if (comment.password !== req.body.password)
      throw new Error('비밀번호가 일치하지 않습니다.');
    await Comment.findOneAndDelete({
      _id: req.params.commentId,
    });
    res.json({ message: '요청하신 방명록이 삭제되었습니다.', comment });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

commentRouter.patch('/update', async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.body.commentId))
      throw new Error('올바르지 않은 방명록 id입니다.');
    const comment = await Comment.findOne({ _id: req.body.commentId });
    if (comment.password !== req.body.password)
      throw new Error('비밀번호가 일치하지 않습니다.');
    await Comment.findOneAndUpdate(
      { _id: req.params.commentId },
      { $set: { comment: req.body.comment } },
      { new: false }
    );
    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

// commentRouter.get('/:weddingKey', async (req, res) => {
//   try {
//     const comment = await Comment.find({ weddingKey: req.params.weddingKey })
//       .sort({ _id: -1 })
//       .limit(10);
//     res.json(comment);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: err.message });
//   }
// });

commentRouter.get('/:weddingKey', async (req, res) => {
  // 페이지네이션 적용
  try {
    const { lastId } = req.query;
    if (lastId && !mongoose.isValidObjectId(lastId))
      throw new Error('invalid lastid');
    const comments = await Comment.find(
      lastId
        ? { weddingKey: req.params.weddingKey, _id: { $lt: lastId } }
        : { weddingKey: req.params.weddingKey }
    )
      .sort({ _id: -1 })
      .limit(10); // 시간 역순
    // lastId가 안넘어오면 모두 불러옴
    res.json({ message: '방명록을 불러왔습니다.', comments });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});
module.exports = { commentRouter };
