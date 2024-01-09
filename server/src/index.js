require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const { imageRouter } = require('./routes/imageRouter')
const { userRouter } = require('./routes/userRouter')
const { infoRouter } = require('./routes/infoRouter')
const { weddingRouter } = require('./routes/weddingRouter')

const app = express();
const {MONGO_URI, PORT} = process.env

const { authenticate } = require('./middleware/authentication')


mongoose
    .connect(MONGO_URI)
    .then(()=> {
        console.log('mongoDB connected')
        // mongodb연결이 안되면 아래 기능 수행하면 안되니까 안에 넣어줌
        app.use('/uploads', express.static('uploads')) // 외부에서 uploads 폴더 사용가능
        // url, 미들웨어(여러개 가능), (request, response)
        app.use(express.json())
        app.use(authenticate)
        app.use('/images', imageRouter)
        app.use('/user', userRouter)
        app.use('/info', infoRouter)
        app.use('/wedding', weddingRouter)
        app.listen(PORT, () => console.log('express server listening on PORT ' + PORT))
        })
    .catch((err) => console.log(err))

