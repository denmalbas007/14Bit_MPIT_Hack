import auth from "../services/auth"
module.exports = async (socket, next) => {
  try {
    const userCookie = socket?.request?.cookies?.user;
    const successVerify = auth.verifySession(userCookie);

    if (successVerify) {
      await socket.join(`user:${userCookie?.email}`);
    } else {
      await socket.leave(`user:${userCookie?.email}`);
    }
  } catch (e) {}
  next();
};
