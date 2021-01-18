const {sendEmail} = require('../jobs/sendEmail')
const job = require('../job')
const UseController = {
    async storage(req, res) {
        const {user, email, pass} = req.body

        const User = {user, email, pass}
        const response = await sendEmail(User)

        await job.add(response)
        
        res.json(response)

    }
}

module.exports = UseController