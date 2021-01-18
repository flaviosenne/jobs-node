require('dotenv').config()

const sendEmail = require('./jobs/sendEmail')
const configRedis = require('./config/redis')

const Bull = require('bull')

const job = {
    add(name, data){
        return new Bull(data)
    },
    process(){
        return new Bull().process(sendEmail)

        new Bull().on('failed', (job, err) => {
            console.log('job failed', job.data)
            console.log(err)
        })
        
    }
}

module.exports = job
 