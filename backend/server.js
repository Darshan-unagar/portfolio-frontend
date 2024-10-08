const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); 
const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received data:', { name, email, message });

 
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'darshanunagarcode15@gmail.com', 
        pass: 'uscf zncw ohsd nzsp'    
      }
    });

    
    await transporter.sendMail({
      from: email,
      to: 'darshanunagarcode15@gmail.com', 
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
