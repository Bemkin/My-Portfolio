import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-to-telegram', (req, res) => {
  const { fullname, email, message } = req.body;
  const telegramMessage = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;
  const token = process.env.TELEGRAM_API_TOKEN; // Your bot's API token
  const chatId = '425667436'; // Replace with your chat ID

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        res.status(200).json({ message: 'Message sent to Telegram successfully!' });
      } else {
        res.status(500).json({ error: 'Failed to send message to Telegram' });
      }
    })
    .catch(error => {
      console.error('Error sending message to Telegram:', error);
      res.status(500).json({ error: 'Error sending message to Telegram' });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
