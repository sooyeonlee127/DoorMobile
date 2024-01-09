
const { Router } = require('express')
const contactRouter = Router()
const Contact = require('../models/contact')

contactRouter.post('/register/:weddingCode', async (req, res) => {
    try {
        const contact = await new Contact({
            code: req.params.weddingCode,
            contactList: req.body.contactList

        }).save()
        res.json({ message: '정보가 저장되었습니다.', contact })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

contactRouter.get('/info/:weddingCode', async (req, res) => {
    try {
        const contact = await Contact.find({ 'code': req.params.weddingCode })
        res.json(contact)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = { contactRouter }