const { Router } = require('express')
const userRouter = Router()
const User = require('../models/user')
const { hash, compare } = require('bcryptjs')
const Image = require('../models/image')

userRouter.post('/register', async(req, res) => {
    try {
        if (req.body.password.length < 6) throw new Error('비밀번호를 최소 6자 이상으로 해주세요.')
        if (req.body.username.length < 3) throw new Error('username은 3자 이상으로 해주세요.')
        const hashedPassword = await hash(req.body.password, 10)
        const user = await new User({ name: req.body.name, username: req.body.username, hashedPassword, sessions: [{ createdAt: new Date() }] }).save()
        const session = user.sessions[0] // 회원가입한 상태에서 세션은 하나밖에 없음
        res.json({ message: 'user registered', sessionId: session._id, name: user.name })
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

userRouter.patch('/login', async(req, res) => {
    try {
        const user = await User.findOne({username: req.body.username})
        const isValid = await compare(req.body.password, user.hashedPassword)
        if (!isValid) throw new Error('입력하신 정보가 올바르지 않습니다.')
        user.sessions.push({createdAt: new Date()})
        const session = user.sessions[user.sessions.length-1]
        await user.save()
        res.json({message: 'user validated', sessionId: session._id, name: user.name})
    } catch(err) {
        res.status(400).json({ message: err.message })
    } 
})

userRouter.patch('/logout', async(req, res) => {
    try {
        console.log(req.user)
        if (!req.user) throw new Error('invalid session id')
        await User.updateOne({ _id: req.user.id }, { $pull: { sessions: { _id: req.headers.sessionid } } })
    // $pull: 배열을 수정할 때 사용, 조건을 넣으면 맞는 객체를 제거해줌
        res.json({message: 'user is logged out.'})
    } catch (err) {
        res.status(400).json({ message: err.message })

    }
})

userRouter.get('/me', (req, res)=> {
    try {
        if (!req.user) throw new Error('권한이 없습니다.')
        res.json({
            message:'success',
            sessionId: req.headers.sessionid,
            name: req.user.name,
            userId: req.user._id,
        })
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})


userRouter.get('/me/images', async (req, res) => {
    try {
        if (!req.user) throw new Error('권한이 없습니다.')
        const images = await Image.find({'user._id': req.user.id})
        res.json(images)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = { userRouter }