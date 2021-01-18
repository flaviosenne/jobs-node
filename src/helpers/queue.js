const Bull = require('bull')

const configRedis = require('../config/redis')
const sendEmail = require('../jobs/sendEmail')

const mailQueue = new Bull(sendEmail.key, configRedis)

module.exports = mailQueue
 