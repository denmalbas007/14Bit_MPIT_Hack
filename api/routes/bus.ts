import express from "express"

import bus from '../services/bus';

const router = express.Router();


router.post('/', async (req, res, next) => {
  const options = {
    plateNumber: req.query['plateNumber'],
    modelName: req.query['modelName'],
    serialNumber: req.query['serialNumber']
  };

  try {
    const result = await bus.postBus(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await bus.getBuses(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.get('/:busId', async (req, res, next) => {
  const options = {
    busId: req.params['busId']
  };

  try {
    const result = await bus.getBusByBusId(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});
router.put('/:busId/location', async (req, res, next) => {
  const options = {
    busId: req.params['busId'],
    latitude: req.query['latitude'],
    longitude: req.query['longitude']
  };

  try {
    const result = await bus.putLocation(options);
    res.status(200).send({
      status: 200,
    });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});
export default router;
