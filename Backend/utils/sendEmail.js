const nodeMailer=require("nodemailer")


const sendEmail=async(options)=>{
      const transporter=nodeMailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:true,
            service:process.env.SMPT_SERVICE,
            auth:{
                  type: 'OAuth2',
                  user:process.env.SMPT_MAIL,
                  pass:process.env.SMPT_PASSWORD,
                  clientId: '979680954847-mima5mmpdpr9qd1e16bk5iascj1ojp2h.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
            }
      })

      const mailOptions={
            from:process.env.SMPT_MAIL,
            to:options.email,
            subject:options.subject,
            text: options.message,
      }
console.log(mailOptions)
console.log(transporter)
     await transporter.sendMail(mailOptions)
}

module.exports=sendEmail