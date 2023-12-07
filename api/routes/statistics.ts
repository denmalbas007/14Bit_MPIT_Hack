import express from "express"

import statistics from '../services/statistics';

const router = express.Router();



router.get('/', async (req, res, next) => {
  const options = {
  };

  try {
    const result = await statistics.getStatistics(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;
