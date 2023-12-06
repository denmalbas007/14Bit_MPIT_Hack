
import {Bus, Shift, Op, User, Route} from "../database/models";

/**
 * @param {Object} options
 * @param {Number} options.plateNumber
 * @param {Number} options.modelName
 * @param {Number} options.serialNumber
 * @throws {Error}
 * @return {Promise}
 */
async function postBus(options) {
  const newBus = await Bus.create({
    plateNumber: options.plateNumber,
    modelName: options.modelName,
    serialNumber: options.serialNumber
  });
  return {
    status: 200,
    data: {
      newBus
    }
  }
}

/**
 * @param {Object} options
 * @throws {Error}
 * @return {Promise}
 */

async function getBuses(options) {
  const buses = await Bus.findAll({})
  return {
    status: 200,
    data: {
      buses
    }
  };
}
/**
 * @param {Object} options
 * @param {Number} options.busId
 * @throws {Error}
 * @return {Promise}
 */
async function getBusByBusId(options) {
  const bus = Bus.findOne({
    where:{
      id: options.busId
    },
  })
  const nowDate = Date.now()
  const shift = await Shift.findOne({
    where: {
      busId: options.busId,
      startsAt: {
        [Op.lt]: nowDate
      },
      endsAt: {
        [Op.gt]: nowDate
      }
    }
  })
  const driver = await User.findOne({
    where: {
      id: shift.driverId
    }
  })
  const route = await Route.findOne({
    where: {
      id: shift.routeId
    }
  })
  return {
    status: 200,
    data: {
      bus,
      driver,
      route
    }
  };
}

/**
 * @param {Object} options
 * @param {Number} options.busId
 * @param {Number} options.latitude
 * @param {Number} options.longitude
 * @throws {Error}
 * @return {Promise}
 */

async function putLocation(options) {
  const bus = await Bus.findOne({
    where: {
      id: options.busId
    }
  })
  bus.latitude = options.latitude;
  bus.longitude = options.longitude;
  await bus.save()
  return {
    status: 200,
    data: {
      bus
    }
  }
}

export default {
  getBuses,
  getBusByBusId,
  postBus,
  putLocation
}
