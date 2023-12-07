import express from "express"

import chat from '../services/chat';

const router = express.Router();


router.get('/', async (req, res, next) => {
  const options = {
  };
  try {
    const result = await chat.getChats(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.get('/:userId', async (req, res, next) => {
  const options = {
    userId: req.params['userId'],
    firstMessageAt: req.query['firstMessageAt']
  };

  try {
    const result = await chat.getChatByUserid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.post('/:userId', async (req, res, next) => {
  const options = {
    userId: req.params['userId'],
    content: req.body['content']
  };

  try {
    const result = await chat.postChatByUserid(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;