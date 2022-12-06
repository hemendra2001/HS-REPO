import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message,subject } = req.body;
  
  if(name.length > 0 &&  email.length > 0 && message.length > 0 && subject.length > 0){
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "webskyseo07@gmail.com",
        pass: "colwcehjjqsnyqyd"
      }
    });
  
    try {
      await transporter.sendMail({
        from: email,
        to: "webskyseo07@gmail.com",
        subject: `Contact form submission from ${name}`,
        html: `<p>You have a contact form submission</p><br>
          <p><strong>Email: </strong> ${email}</p><br>
          <p><strong>Subject: </strong> ${subject}</p><br>
          <p><strong>Message: </strong> ${message}</p><br>
        `
      });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
    return res.status(200).json({ error: "" });
  }else{
    return res.status(500).json({ error: "Please fill all the detail" });

  }

};