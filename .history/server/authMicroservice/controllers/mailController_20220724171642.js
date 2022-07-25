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

    let content = `Thank you, ${fullName} for signing up to Tangerine Furniture`;

    let message = {
      from: "devlaukey@outlook.com",
      to: email,
      subject: "Appointment",
      text: content,
      icalEvent: {
        filename: "invitation.ics",
        method: "request",
        content: content,
        path: "./myevents.ics",
      },
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
