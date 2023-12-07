import express from "express"

import statistics from '../services/statistics';
import neuro from '../services/neuro'
const router = express.Router();



router.get('/', async (req, res, next) => {
  const options = {
    prompt: req.params['prompt']
  };

  try {
    const result = await neuro.predictIntention(options.prompt);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;
