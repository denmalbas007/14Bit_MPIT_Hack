import cookie from "cookie";
export default function (socket, next) {
  try {
    if (socket.request.headers.cookie) {
      socket.request.cookies = cookie.parse(socket.request.headers.cookie);
      Object.keys(socket.request.cookies).forEach((cookie) => {
        try {
          socket.request.cookies[cookie] = JSON.parse(
            socket.request.cookies[cookie]
          );
        } catch (e) {}
      });
    }
  } catch {}
  next();
};
