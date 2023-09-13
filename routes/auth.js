const express = require('express');
const router = express.Router();
const { register, login, updateUser } = require('../controllers/auth');
const auth = require('../middleware/authentication');
const isTestUser = require('../middleware/isTestUser');

const rateLimiter = require('express-rate-limit');
const limiter = rateLimiter({
  windowMS: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: 'Please try again after 15 minutes'
  }
});

router.post('/register', limiter, register);
router.post('/login', limiter, login);
router.patch('/updateUser', auth, isTestUser, updateUser);

module.exports = router;