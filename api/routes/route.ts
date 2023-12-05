import express from "express"

import route from '../services/route';

const router = express.Router();


router.post('/', async (req, res, next) => {
  const options = {
    name: req.body['name']
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

router.post('/:routeId/shift', async (req, res, next) => {
  const options = {
    driverId: req.body['driverId'],
    startsAt: req.body['startsAt'],
    endsAt: req.body['endsAt'],
    routeId: req.params['routeId']
  };

  try {
    const result = await route.postShift(options);
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
    schedules: req.body['schedules'],
    routeId: req.params['routeId']
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


router.put('/:routeId/bus_station', async (req, res, next) => {
  const options = {
    busStationId: req.body['busStationId'],
    routeId: req.params["routeId"]
  };

  try {
    const result = await route.putRouteByRouteIdBusStation(options);
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
