require('dotenv').config()

const Queue = require('./helpers/queue')
const sendEmail = require('./jobs/sendEmail')

Queue.process(sendEmail.handle)