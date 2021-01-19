const nodemailer = require('nodemailer')


const configEmail = require('../config/mail')

const transporter = nodemailer.createTransport(configEmail) 

module.exports = transporter


