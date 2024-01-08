
const { Router } = require('express')
const infoRouter = Router()
const Info = require('../models/info')

infoRouter.post('/register', async (req, res) => {
    try {
        console.log(req.body)
        if (!req.user) throw new Error('권한이 없습니다.')
        const info = await new Info({
            user: {
                _id: req.user.id,
                name: req.user.name,
                username: req.user.username
            },
            address: req.body.address,
            placename: req.body.placename,
            bus: req.body.bus,
            subway: req.body.subway,
            date: req.body.date,
        }).save()
        res.json({ message: '정보가 저장되었습니다.', info })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})



module.exports = { infoRouter }