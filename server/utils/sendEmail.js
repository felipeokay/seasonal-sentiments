const nodemailer = require("nodemailer");

// add bccEmail back for BCC
const sendEmail = async (subject, message, send_to, sent_from, reply_to, imageUrl, friendName, senderName, ) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: "587",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

const htmlMessage = `
  <html>
    <body style="margin: 0; padding: 20px; background-color: #113b71;">
      <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px;">
        <p>Dear ${friendName},</p>
        <p>${message}</p>
        <p>Warm regards,</p>
        <p>${senderName}</p>
        <img src="${imageUrl}" style="max-width: 100%;">
      </div>
    </body>
  </html>
`;

  const options = {
    from: "Seasonal Sentiments",
    to: send_to,
    replyTo: reply_to,
    subject: subject,
    html: htmlMessage,
  };

  // if (bccEmail) {
  //   options.bcc = bccEmail;
  // }

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;