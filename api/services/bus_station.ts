
import {BusRouteStation, BusStation, Route} from "../database/models";

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */

async function getBusStations(options) {

  const busStations = await BusStation.findAll();

  return {
    status: 200,
    data: {
      busStations
    }
  };
}

/**
 * @param {Object} options
 * @param {} options.name 
 * @throws {Error}
 * @return {Promise}
 */

async function postBusStation(options) {

  const busStation = await BusStation.create({
    name: options.name
  });
  return {
    status: 200,
    data: {
      busStation
    }
  };
}

/**
 * @param {Object} options
 * @param {Number} options.busStationId
 * @throws {Error}
 * @return {Promise}
 */
async function getBusStationByBusStationId(options) {
  const busStation = await BusStation.findOne({
    where: {
      id: options.busStationId
    }
  })
  const busRouteStations = await BusRouteStation.findAll({
    where: {
      busStationId: busStation.id
    }
  })
  const routes = []
  for (const routeStation of busRouteStations) {
    const route = await Route.findOne({
      where: {
        id: routeStation.routeId
      }
    });
    routes.push(route)
  }
  return {
    status: 200,
    data: {
      busStation,
      routes
    }
  };
}

export default {
  getBusStations,
  postBusStation,
  getBusStationByBusStationId
}