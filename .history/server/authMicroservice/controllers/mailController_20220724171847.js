const nodemailer = require("nodemailer");

exports.sendEmail = async (email, fullName) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "outlook",
      auth: {
        user: "devlaukey@outlook.com",
        pass: "mburu.2924",
      },
    });
      
      let date = new Date();

    let content = `Thank you, ${fullName} for signing up to Tangerine Furniture at ${date.toUTCString()} `;

    let message = {
      from: "devlaukey@outlook.com",
      to: email,
      subject: "Appointment",
      text: content,
    
    };

    // message
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log("email sent: ", info);
      res.send(info);
    });
  } catch (error) {
    console.log("error", error);
  }
};
