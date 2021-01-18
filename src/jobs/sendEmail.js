const Email = require('../helpers/email')

module.exports =
    handle = async (data) => {

        const { name, email } = data
        await Email.sendMail({
            from: `joao dev <${process.env.MAIL_USER}>`,
            to: `${name} <${email}>`,
            subject: 'Mandar e-mail para processo',
            html: 'Este e-mail é uma das tarefas a serem realizadas pelo processo da Empresa iZagro'
        })
    }

