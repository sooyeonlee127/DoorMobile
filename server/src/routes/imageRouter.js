const { Router } = require('express');
const imageRouter = Router();
const Image = require('../models/image');
const { upload } = require('../middleware/imageUpload');
const fs = require('fs'); // file system
const { promisify } = require('util');
const mongoose = require('mongoose');
const fileUnlink = promisify(fs.unlink);
// fs.unlink가 promise객체를 반환하도록 처리 --> 원래 fs.unlink는 callback함수를 인자로 넣어줘야함

//imageRouter.post('/', upload.single('image'), async (req, res) => { => 한장만 받음
imageRouter.post('/', upload.array('image', 15), async (req, res) => {
  // => 배열로 받음 - 5장 제한
  try {
    // 유저정보, public 유무 확인
    // upload.single('image'): upload - 객체 / single : 단일사진만 받을 거이다. / 'image': 객체이름을 imdage로 할 것이다.
    // if (!req.user) throw new Error('권한이 없습니다.')

    // main과 calender 2장 이상이 되면 안됨.
    if (req.body.imageTypeCode === '01') {
      const prevImage = await Image.findOne({
        imageTypeCode: '01',
        weddingKey: req.body.weddingKey,
      });
      if (prevImage) throw new Error('이미 메인 사진이 있습니다.');
    }
    if (req.body.imageTypeCode === '02') {
      const prevImage = await Image.findOne({
        imageTypeCode: '02',
        weddingKey: req.body.weddingKey,
      });
      if (prevImage) throw new Error('이미 캘린더 사진이 있습니다.');
    }

    const images = await Promise.all(
      req.files.map(async (file) => {
        const image = await new Image({
          weddingKey: req.body.weddingKey,
          imageTypeCode: req.body.imageTypeCode,
          key: file.filename,
          originalFileName: file.originalname,
        }).save();
        return image;
      })
    );
    res.json(images);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/gallery', async (req, res) => {
  // 페이지네이션 적용
  try {
    const images = await Image.find({
      imageTypeCode: '03',
      weddingKey: req.body.weddingKey,
    })
      .sort({ _id: -1 })
      .limit(20);
    res.json({ message: '사진을 불러왔습니다.', images });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/main', async (req, res) => {
  // 페이지네이션 적용
  try {
    const image = await Image.findOne({
      imageTypeCode: '01',
      weddingKey: req.body.weddingKey,
    });
    if (!image) throw new Error('해당 id의 메인 사진이 없습니다.');
    res.json({ message: '사진을 불러왔습니다.', image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/calender', async (req, res) => {
  // 페이지네이션 적용
  try {
    const image = await Image.findOne({
      imageTypeCode: '02',
      weddingKey: req.body.weddingKey,
    });
    if (!image) throw new Error('해당 id의 캘린더 사진이 없습니다.');
    res.json({ message: '사진을 불러왔습니다.', image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.delete('/:imageId', async (req, res) => {
  // 유저 권한 확인
  // 사진 삭제
  // 1. uploads 폴더에 있는 사진 데이터를 삭제
  // 2. 데이터베이스에 있는 image 문서를 삭제
  try {
    // console.log(req.params);
    // if (!req.user) throw new Error('권한이 없습니다.');
    if (!mongoose.isValidObjectId(req.params.imageId))
      throw new Error('올바르지 않은 이미지 id입니다.');
    const image = await Image.findOneAndDelete({ _id: req.params.imageId });
    if (!image)
      return res.json({ message: '요청하신 사진은 이미 삭제되었습니다.' });
    await fileUnlink(`./uploads/${image.key}`);
    res.json({ message: '요청하신 이미지가 삭제되었습니다.', image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = { imageRouter };
