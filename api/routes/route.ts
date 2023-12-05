import express from "express"

import route from '../services/route';

const router = express.Router();


router.post('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await route.postRoute(options);
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
    const result = await route.getRoute(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.put('/:routeId/schedule', async (req, res, next) => {
  const options = {
    schedules: req.query['schedules']
  };

  try {
    const result = await route.putRouteByRouteIdSchedule(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.post('/:routeId/bus_station', async (req, res, next) => {
  const options = {
    busStationId: req.query['busStationId']
  };

  try {
    const result = await route.postRouteByRouteIdBusStation(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.get('/:routeId', async (req, res, next) => {
  const options = {
    routeId: req.params['routeId']
  };

  try {
    const result = await route.getRouteByRouteId(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;
