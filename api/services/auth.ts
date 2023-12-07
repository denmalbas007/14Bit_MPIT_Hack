import bcrypt from "bcrypt"
import { User } from "../database/models";
import config from "../config/auth"
import crypto from "crypto";
/**
 * @param {Object} options
 * @param {String} options.email
 * @param {String} options.password
 * @throws {Error}
 * @return {Promise}
 */
async function postAuthSignIn(options) {
  const user = await User.findOne({
    where: {
      email: options.email
    }
  })

  if (user === null) {
    return {
      status: 401
    }
  }
  if (bcrypt.compareSync(options.password, user.passwordHash)) {
    user.secureSessionId = crypto.randomBytes(config.token_size).toString("hex");
    await user.save()
    return {
      status: 200,
      data: {
        secureSessionId: user.secureSessionId
      }
    }
  }
}


/**
 * @param {Object} options
 * @param {String} options.firstName
 * @param {String} options.lastName
 * @param {String} options.email
 * @param {String} options.password
 * @param {String} options.userType
 * @throws {Error}
 * @return {Promise}
 */

async function postAuthSignup(options) {
  const [user,created] = await User.findOrCreate({
    where: {
      email: options.email
    }
  })
  if (!created) {
    return {
      status: 401,
    }
  }

  user.passwordSalt = bcrypt.genSaltSync(config.salt_rounds);
  user.passwordHash = bcrypt.hashSync(options.password, user.passwordSalt);

  Object.assign(user, {
    firstName: options.firstName,
    lastName: options.lastName,
    userType: options.userType
  })

  await user.save()
  return {
    status: 200,
    data: {
    }
  };

}
/**
 * @param {Object} options
 * @param {String} options.email
 * @param {String} options.SSID
 * @throws {Error}
 * @return {Promise}
 */
async function verifySession(options) {
  const user = await User.findOne({
    where: {
      email: options.email,
    },
  });
  return options.SSID === user.secureSessionId;
}
export default {
  postAuthSignIn,
  postAuthSignup,
  verifySession
}

