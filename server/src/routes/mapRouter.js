const { Router } = require('express');
const mapRouter = Router();
const Map = require('../models/map');

mapRouter.post('/insert', async (req, res) => {
    try {
        const map = await new Map({
            weddingKey: req.body.weddingKey,
            directionList: req.body.directionList,
            center: req.body.center
        }).save();
        res.json({ code: 200, message: '정보가 저장되었습니다.' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// contactRouter.get('/info/:weddingKey', async (req, res) => {
//     try {
//         const contact = await Contact.findOne({ weddingKey: req.params.weddingKey });
//         res.json({ code: 200, message: '정보가 조회되었습니다.', data: contact });
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

module.exports = { mapRouter };
