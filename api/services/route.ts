
import {BusRouteStation, Route, RouteSchedule, Shift} from "../database/models";

/**
 * @param {Object} options
 * @param {} options.name
 * @throws {Error}
 * @return {Promise}
 */

async function postRoute(options) {
  const newRoute = await Route.create({
    name: options.name,
  })
  return {
    status: 200,
    data: {
      newRoute
    }
  };
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
async function getRoute(options) {
  const routes = await Route.findAll();

  return {
    status: 200,
    data: {
      routes
    }
  };
}

/**
 * @param {Object} options
 * @param {Number} options.driverId
 * @param {Number} options.routeId
 * @param {Date} options.startsAt
 * @param {Date} options.endsAt
 * @throws {Error}
 * @return {Promise}
 */

async function postShift(options) {
  const newShift = await Shift.create({
    driverId: options.driverId,
    routeId: options.routeId,
    startsAt: options.startsAt,
    endsAt: options.endsAt
  });
  return {
    status: 200,
    data: {
      newShift
    }
  }
}

/**
 * @param {Object} options
 * @param {Number} options.routeId
 * @param {Array} options.schedules
 * @throws {Error}
 * @return {Promise}
 */

async function putRouteByRouteIdSchedule(options) {
  const route = await Route.findOne({
    where: {
      id: options.routeId
    }
  });
  await RouteSchedule.destroy({
    where:{
      routeId: route.id
    }
  })
  for (const schedule of options.schedules) {
    await RouteSchedule.create({
      routeId: route.id,
      timeOfStart: schedule.timeOfStart,
      timeOfEnd: schedule.timeOfEnd,
      frequency: schedule.frequency
    })
  }
  return {
    status: 200,
    data: 'putRouteByRouteidSchedule ok!'
  };
}

/**
 * @param {Object} options
 * @param {} options.busStations
 * @param {} options.routeId
 * @throws {Error}
 * @return {Promise}
 */
async function putRouteByRouteIdBusStation(options) {
  const route = await Route.findOne({
    where:{
      id: options.routeId
    }
  });
  await BusRouteStation.destroy({
    where:{
      routeId: route.id,
    }
  })
  for (const busStation of options.busStations) {
    await BusRouteStation.create({
      routeId: route.id,
      busStationId: busStation.id
    })
  }
  return {
    status: 200,
    data: 'postRouteByRouteidBusStation ok!'
  };
}

/**
 * @param {Object} options
 * @param {Number} options.routeId
 * @throws {Error}
 * @return {Promise}
 */
async function getRouteByRouteId(options) {
  const route = await Route.findOne({
    where:{
      id: options.routeId
    },
    include: [
      {
        model: RouteSchedule
      },
      {
        model: BusRouteStation
      }
    ]
  });
  return {
    status: 200,
    data: {
      route
    }
  };
}

export default {
  postRoute,
  getRoute,
  putRouteByRouteIdSchedule,
  putRouteByRouteIdBusStation,
  getRouteByRouteId,
  postShift
}