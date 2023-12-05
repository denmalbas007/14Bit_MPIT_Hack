
import auth from "../services/auth"
import {User} from "../database/models";
async function useUserSessionMiddleware(request, response, next) {
  request.activeUser = {
    hasUser: false
  };
  try {
    const userCookie = JSON.parse(request?.cookies?.user);
    const successVerify = auth.verifySession(userCookie);

    if (successVerify) {
      const user  = await User.findOne({
        where: {
          email: userCookie.email
        }
      })
      request.activeUser = {
        email: userCookie?.email,
        hasUser: true
      }
      return next();
    }
  } catch (e) {}
  next();
}

export default {
  useUserSessionMiddleware,
};
