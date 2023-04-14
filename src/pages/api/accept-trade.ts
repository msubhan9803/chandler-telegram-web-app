// pages/api/accept-trade.js
import axios from 'axios';

// Replace with your Telegram bot token
const TELEGRAM_BOT_TOKEN = '5741903349:AAFd3xtrymqfpcmz8P0xGPb7xvNqioLEdrA';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { chat_id, message } = JSON.parse(req.body);
      console.log('chat_id: ', chat_id)
      console.log('currency1Addr: ', message.currency1Addr)
      console.log('currency2Addr: ', message.currency2Addr)

      if (!chat_id || !message) {
        return res.status(400).json({ error: 'chat_id and message are required' });
      }

      // Do your api handling

      const response = await axios.post(TELEGRAM_API_URL, {
        chat_id,
        text: `Thankyou! Your request for ${message.currency1Addr} against ${message.currency2Addr} was successfull`,
      });

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
