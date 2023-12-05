
/**
 * @param {Object} options
 * @param {} options.name 
 * @throws {Error}
 * @return {Promise}
 */
async function postRoute(options) {

  return {
    status: 200,
    data: 'postRoute ok!'
  };
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */
async function getRoute(options) {


  return {
    status: 200,
    data: 'getRoute ok!'
  };
}

/**
 * @param {Object} options
 * @param {Array} options.schedules 
 * @throws {Error}
 * @return {Promise}
 */
async function putRouteByRouteIdSchedule(options) {
  return {
    status: 200,
    data: 'putRouteByRouteidSchedule ok!'
  };
}

/**
 * @param {Object} options
 * @param {} options.busStationId 
 * @throws {Error}
 * @return {Promise}
 */
async function postRouteByRouteIdBusStation(options) {

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

  return {
    status: 200,
    data: 'getRouteByRouteid ok!'
  };
}

export default {
  postRoute,
  getRoute,
  putRouteByRouteIdSchedule,
  postRouteByRouteIdBusStation,
  getRouteByRouteId
}