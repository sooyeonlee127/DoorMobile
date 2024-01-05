const multer = require('multer')
const { v4: uuid } = require('uuid')
const mime = require('mime-types')

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    // destination: 저장장소
    filename: (req, file, cb) => cb(null, `${uuid()}.${mime.extension(file.mimetype)}`)
    // filename: 저장 파일명, uuid()를 통해 중복 파일명이 생기지 않도록 처리
})
const upload = multer({
    storage, fileFilter: (req, file, cb) => {
        if (['image/png', 'image/jpeg'].includes(file.mimetype)) cb(null, true)
        else cb(new Error('invalid file type.'), false)
        // callback에 두번째 인자에 true를 넣으면 저장, false를 하면 저장 안됨
    }, limits: {
        fileSize: 1024 * 1024 * 5, // 5mb
    }
}) // 이미지 업로드 미들웨어

module.exports = {upload}