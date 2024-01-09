
const { Router } = require('express')
const weddingRouter = Router()
const Wedding = require('../models/wedding')

weddingRouter.post('/register', async (req, res) => {
    try {
        const wedding = await new Wedding({
            code: req.body.code,
            groom: {
                name: req.body.groom.name,
                groomRoleTypeCode: req.body.groom.groomRoleTypeCode,
                parents: {
                    mother: req.body.groom.mother,
                    father: req.body.groom.father,
                }
            },
            bride: {
                name: req.body.bride.name,
                brideRoleTypeCode: req.body.bride.brideRoleTypeCode,
                parents: {
                    mother: req.body.bride.mother,
                    father: req.body.bride.father,
                }
            },
            invitationSentence: req.body.invitationSentence,
            weddingDate: req.body.weddingDate,
            weddingTime: req.body.weddingTime,
        }).save()
        res.json({ message: '정보가 저장되었습니다.', wedding })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

weddingRouter.get('/info/:weddingCode', async (req, res) => {
    try {
        // if (!mongoose.isValidObjectId(req.params.weddingCode)) throw new Error('올바르지 않은 code입니다.')
        const wedding = await Wedding.find({ 'code': req.params.weddingCode })
        res.json(wedding)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})



module.exports = { weddingRouter }