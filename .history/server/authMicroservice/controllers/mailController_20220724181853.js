const nodemailer = require("nodemailer");

exports.signUpEmail = async (email, fullName) => {
  try {
   let transporter = nodemailer.createTransport({
     host: "smtp.outlook.com",
     port: 587,
     secure: false, // true for 465, false for other ports
     auth: {
       user: "tangerinefurn@outlook.com", // generated ethereal user
       pass: "Password@Jitu", // generated ethereal password
     },
   });
      
      let date = new Date();

    let content = `Thank you, ${fullName} for signing up to Tangerine Furniture at ${date} `;

    let message = {
      from: "tangerinefurn@outlook.com",
      to: email,
      subject: "SignUp Confirmation for Tangerine Furnitures",
      text: content,
    
    };

    // message
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log("email sent: ", info);
    });
  } catch (error) {
    console.log("error", error);
  }
};

exports.loginEmail = async (email) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.outlook.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "tangerinefurn@outlook.com", // generated ethereal user
        pass: "Password@Jitu", // generated ethereal password
      },
    });

    let date = new Date();

    let content = `You have logged in successfully to Tangerine Furniture at ${date} `;

    let message = {
      from: "tangerinefurn@outlook.com",
      to: email,
      subject: "SignUp Confirmation for Tangerine Furnitures",
      text: content,
    };

    // message
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log("email sent: ", info);
    });
  } catch (error) {
    console.log("error", error);
  }
};