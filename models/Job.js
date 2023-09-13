const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxlength: 100
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user']
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'intership'],
      default: 'full-time'
    },
    jobLocation: {
      type: String,
      required: true,
      maxlength: 100,
      default: 'my city'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', JobSchema)