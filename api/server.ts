
import db from './database/db'
import { initModels }  from './database/models'
import http from "http"
import { Server } from "socket.io";
import app from "./app";
async function run() {
  initModels(db)
  await db.sync()
  console.log("Init models")
  const httpServer = http.createServer(app);
  const io = new Server(httpServer, {
    cookie: true,
    transports: ["polling"],
  });
  app.set("io", io);
  const port = process.env.PORT || 3001;
  httpServer.listen(port);

}


run()