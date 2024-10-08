const { Router } = require('express');
const imageRouter = Router();
const Image = require('../models/image');
const { upload } = require('../middleware/imageUpload');
const fs = require('fs'); // file system
const { promisify } = require('util');
const mongoose = require('mongoose');
const fileUnlink = promisify(fs.unlink);
const { s3, getSignedUrl } = require("../../aws");
const { v4: uuid } = require('uuid')
const mime = require('mime-types')
// fs.unlink가 promise객체를 반환하도록 처리 --> 원래 fs.unlink는 callback함수를 인자로 넣어줘야함


imageRouter.post('/presigned', async(req, res) => {
  try {
    const { contentTypes } = req.body
    if (!Array.isArray(contentTypes)) throw new Error('invaild contentTypes')
    const presignedData = await Promise.all(contentTypes.map(async contentType => {
      const imageKey = `${uuid()}.${mime.extension(contentType)}`
      const key = `raw/${imageKey}`
      const presigned = await getSignedUrl({key})
      return { imageKey, presigned } 
      // imageKey: 가지고 있다가 백엔드 보내줘야하는 정보
      // presigned: s3에 보낼 정보. 인증정보들이 들어가있음
    })
  )
  res.json(presignedData)
  } catch(err) {
    console.log(err)
    res.state(400).json({message: err.message})
  }
})


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
          key: file.key.replace("raw/", ""),
          originalFileName: file.originalname,
        }).save();
        return image;
      })
    );
    res.json({ code: 200, message: '사진이 등록되었습니다.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/gallery/:weddingKey', async (req, res) => {
  // 페이지네이션 적용
  try {
    let popupList = [];
    const images = await Image.find({
      imageTypeCode: '03',
      weddingKey: req.params.weddingKey,
    })
      .sort({ _id: -1 })
      .limit(20);
    images.map((img) =>
      popupList.push({ original: img.key, thumbnail: img.key })
    );
    res.json({
      code: 200,
      message: '갤러리 사진을 불러왔습니다.',
      data: images,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/main/:weddingKey', async (req, res) => {
  // 페이지네이션 적용
  try {
    const image = await Image.findOne({
      imageTypeCode: '01',
      weddingKey: req.params.weddingKey,
    });
    if (!image) throw new Error('해당 id의 메인 사진이 없습니다.');
    res.json({ code: 200, message: '메인 사진을 불러왔습니다.', data: image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

imageRouter.get('/calendar/:weddingKey', async (req, res) => {
  // 페이지네이션 적용
  try {
    const image = await Image.findOne({
      imageTypeCode: '02',
      weddingKey: req.params.weddingKey,
    });
    if (!image) throw new Error('해당 id의 캘린더 사진이 없습니다.');
    res.json({
      code: 200,
      message: '캘린더 사진을 불러왔습니다.',
      data: image,
    });
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
    // await fileUnlink(`./uploads/${image.key}`);
    s3.deleteObject({ Bucket: 'door-mobile-website', Key: `raw/${image.key}`},
     (error, data) => {
      if (error) throw error;
    })
    res.json({ message: '요청하신 이미지가 삭제되었습니다.', image });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

module.exports = { imageRouter };
