const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Add this to check if env variables are loaded
console.log('Environment Check:', {
  mailExists: !!process.env.USER_MAIL,
  passExists: !!process.env.USER_PASS,
  mailLength: process.env.USER_MAIL?.length,
  passLength: process.env.USER_PASS?.length
});

app.use(cors());
app.use(express.json());

app.post('/api/mail', async(req,res)=>{
  const {name,mail,mess} = req.body;
  console.log("Received request:", req.body);
  
  // Log credentials (remove in production)
  console.log('Credentials being used:', {
    mail: process.env.USER_MAIL,
    passLength: process.env.USER_PASS?.length
  });

  if (!process.env.USER_MAIL || !process.env.USER_PASS) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASS
    },
    debug: true // Add this for detailed logging
  });

  const mailOptions = {
    from: process.env.USER_MAIL,
    to: process.env.USER_MAIL,
    subject: `Message from ${name}`,
    text: `
      From: ${name}
      Email: ${mail}
      Message: ${mess}
    `
  };

  try {
    // Test connection first
    await transporter.verify();
    console.log('Transporter verified successfully');

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error('Detailed error:', {
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    res.status(500).json({ error: "Error sending email", details: error.message });
  }
});

const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});