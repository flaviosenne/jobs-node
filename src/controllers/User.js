const handle = require('../jobs/sendEmail')
const job = require('../queue')

// const EmailGmail = require('../helpers/google')

const UseController = {
    async storage(req, res) {
        const {user, email, pass} = req.body

        const User = {user, email, pass}
        const response = await handle(User)

        // adicionar jobs na fila
        const a = await job.add('sendEMail', response)
        
        res.json(a)

    },
    // index(req, res)  {
    //     return res.json(EmailGmail)
    // }
}

module.exports = UseController