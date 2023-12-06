import express from "express"

import accident from '../services/accident';

const router = express.Router();


router.get('/', async (req, res, next) => {
    const options = {
    };
    try {
        const result = await accident.getAccidents(options);
        res.status(200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});

router.post('/', async (req, res, next) => {
    const options = {
        driverId: req.body['driverId'],
        busId: req.body['busId']
    };

    try {
        const result = await accident.postAccident(options);
        res.status(200).send(result.data);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: 'Server Error'
        });
    }
});

export default router;