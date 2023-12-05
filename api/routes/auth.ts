import express from "express"
import auth from '../services/auth';

const router = express.Router();


router.post('/signin', async (req, res, next) => {
  const options = {
    email: req.body['email'],
    password: req.body['password']
  };

  try {
    const result = await auth.postAuthSignIn(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});


router.post('/signup', async (req, res, next) => {
  const options = {
    firstName: req.body['firstName'],
    lastName: req.body['lastName'],
    email: req.body['email'],
    password: req.body['password'],
  };

  try {
    const result = await auth.postAuthSignup(options);
    res.status(200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: 'Server Error'
    });
  }
});

export default router;
