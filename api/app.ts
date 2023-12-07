import express from "express";
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from "cors";

import busStationRoute from "./routes/bus_station"
import chatRoute from "./routes/chat"
import busRoute from "./routes/bus"
import authRoute from "./routes/auth"
import busRouteRoute from "./routes/route"
import statisticsRoute from "./routes/statistics"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

/*
 * Routes
 */
app.use('/api/chat', chatRoute);
app.use('/api/bus_station', busStationRoute);
app.use('/api/bus', busRoute);
app.use('/api/route', busRouteRoute);
app.use('/api/auth', authRoute);
app.use('/api/statistics', statisticsRoute);

// catch 404
app.use((req, res, next) => {
  console.error(`Error 404 on ${req.url}.`);
  res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const msg = err.error || err.message;
  console.error(`Error ${status} (${msg}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).send({ status, error: msg });
});


export default app;
