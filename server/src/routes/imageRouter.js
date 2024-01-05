
const { Router } = require('express')
const imageRouter = Router()
const Image = require('../models/image')
const { upload } = require('../middleware/imageUpload')
const fs = require('fs') // file system
const { promisify } = require('util')
const mongoose = require('mongoose')
const fileUnlink = promisify(fs.unlink) 
// fs.unlink가 promise객체를 반환하도록 처리 --> 원래 fs.unlink는 callback함수를 인자로 넣어줘야함

//imageRouter.post('/', upload.single('image'), async (req, res) => { => 한장만 받음
imageRouter.post('/', upload.array('image', 5), async (req, res) => { // => 배열로 받음 - 5장 제한
    try {
        // 유저정보, public 유무 확인
        // upload.single('image'): upload - 객체 / single : 단일사진만 받을 거이다. / 'image': 객체이름을 imdage로 할 것이다.
        if (!req.user) throw new Error('권한이 없습니다.')
        const images = await Promise.all(
            req.files.map(async file => {
                const image = await new Image({
                    user: {
                        _id: req.user.id,
                        name: req.user.name,
                        username: req.user.username
                    },
                    public: req.body.public,
                    key: file.filename,
                    originalFileName: file.originalname
                }).save()
                return image
            }))
            res.json(images)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// imageRouter.get('/images', async (req, res) => { // 전체 사진 호출
//     // public 이미지들만 제공
//     const images = await Image.find({public: true});
//     res.json(images)
// })


imageRouter.get('/', async (req, res) => { // 페이지네이션 적용
    try {
        // public 이미지들만 제공
        const { lastId } = req.query
        if (lastId && !mongoose.isValidObjectId(lastId)) throw new Error('invalid lastid')
        const images = await Image.find(lastId ? { public: false, _id: { $lt: lastId } } : { public: false }).sort({ _id: -1 }).limit(20) // 시간 역순
        // lastId가 안넘어오면 모두 불러옴
        res.json({message: '사진을 불러왔습니다.',images})
    } catch(err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})





imageRouter.delete('/:imageId', async(req, res) => {
    // 유저 권한 확인
    // 사진 삭제
    // 1. uploads 폴더에 있는 사진 데이터를 삭제
    // 2. 데이터베이스에 있는 image 문서를 삭제
    try {
        console.log(req.params)
        if (!req.user) throw new Error('권한이 없습니다.')
        if (!mongoose.isValidObjectId(req.params.imageId)) throw new Error('올바르지 않은 이미지 id입니다.')
        const image = await Image.findOneAndDelete({_id: req.params.imageId})
        if (!image) return res.json({message: '요청하신 사진은 이미 삭제되었습니다.'})
        await fileUnlink(`./uploads/${image.key}`)
        res.json({message: '요청하신 이미지가 삭제되었습니다.', image})
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

imageRouter.patch('/:imageId/like', async(req, res) => {
    // 유저 권한 확인
    // like 중복 안되도록 확인
    try {
        if (!req.user) throw new Error('권한이 없습니다.')
        if (!mongoose.isValidObjectId(req.params.imageId)) throw new Error('올바르지 않은 이미지 id입니다.')
        // $addToSet : 추가하려는 값이 있으면 push 안함  / $push : 중복 값도 추가함
        const image = await Image.findOneAndUpdate({_id: req.params.imageId}, {$addToSet: {likes: req.user.id}}, {new: true})
        res.json(image)
    } catch(err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})

imageRouter.patch('/:imageId/unlike', async (req, res) => {
    // 유저 권한 확인
    // like 중복 취소 안되도록 확인
    try {
        if (!req.user) throw new Error('권한이 없습니다.')
        if (!mongoose.isValidObjectId(req.params.imageId)) throw new Error('올바르지 않은 이미지 id입니다.')
        // $ pull: 삭제
        const image = await Image.findOneAndUpdate({ _id: req.params.imageId }, { $pull: { likes: req.user.id } }, { new: true })
        res.json(image)
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    }
})


module.exports = { imageRouter }