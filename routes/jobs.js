const express = require('express');
const isTestUser = require('../middleware/isTestUser');
const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats
} = require('../controllers/jobs');

router.route('/').post(isTestUser, createJob).get(getAllJobs);
router.route('/stats').get(showStats);
router.route('/:id').get(getJob).delete(isTestUser, deleteJob).patch(isTestUser, updateJob);

module.exports = router;