const nodeMailer = require('nodemailer')
require('dotenv').config();

const sendMail = async (usermail , subject , content) => {
    //create a email transporter
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDING_GMAIL,
            pass: process.env.GMAIL_APP_PASS
        }
    })

    // config email content 
    const mailOption = {
        from: process.env.SENDING_GMAIL,
        to: "mysterymr07@gmail.com",
        subject: `Contact Mail from Tech Vision - ${subject}`,
        text: `New Mail from - ${usermail} \n\n ${content}`,
        // html : `<hr> <a href=${url}>${url}</a>`
    }

    //send mail
    try {
        const result = await transporter.sendMail(mailOption)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

module.exports = sendMail