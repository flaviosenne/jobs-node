const job = require('../helpers/queue')


const UseController = {
    async storage(req, res) {
        const {user, email, pass} = req.body

        const User = {user, email, pass}
        
        // adicionar jobs na fila
        await job.add(User)        
        
        res.send('email enviado')

    },
    // index(req, res)  {
    //     return res.json(EmailGmail)
    // }
}

module.exports = UseController