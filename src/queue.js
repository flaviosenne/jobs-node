require('dotenv').config()

const configRedis = require('./config/redis')
const sendEmail = require('./jobs/sendEmail')

const Bull = require('bull')

const job = {
    add(name, data){
        return new Bull(name, configRedis).add(data)
    },
    process(){
        new Bull().process(sendEmail)

        new Bull().on('failed', (job, err) => {
            console.log('job failed', job.data)
            console.log(err)
        })
        
    }
}

module.exports = job
 