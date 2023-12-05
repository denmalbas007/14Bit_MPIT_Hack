import express from "express"

import busStation from '../services/bus_station';

const router = express.Router();



router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await busStation.getBusStations(options);
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
    longitude: req.body['longitude'],
    latitude: req.body['latitude'],
    name: req.body['name']
  };

  try {
    const result = await busStation.postBusStation(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.get('/:busStationId', async (req, res, next) => {
  const options = {
    busStationId: req.params['busStationId']
  };

  try {
    const result = await busStation.getBusStationByBusStationId(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;
