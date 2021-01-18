const Email = require('../helpers/email')

module.exports = {

    sendEmail(data){
        
        const {name, email} = data
        Email.sendMail({
            from: 'iZagro <processo@izagro.com.br>',
            to: `${name} <${email}>`,
            subject: 'Mandar e-mail para processo',
            html: 'Este e-mail é uma das tarefas a serem realizadas pelo processo da Empresa iZagro'
        })
    }
}
