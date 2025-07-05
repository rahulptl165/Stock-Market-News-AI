const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { title } = req.body;

  const prompt = `You are a financial AI assistant. Analyze the following stock market news headline and respond in this **exact format**, each on a new line: Impact: <Positive / Negative / Neutral> Reason: <one-line explanation of the impact> Headline: "${title}"`;

  try {

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const aiResponse = response.data.choices[0].message.content;
    res.json({ analysis: aiResponse });

  } catch (err) {
    console.error("OpenAI Error:", err.response?.data || err.message);
    res.status(500).json({ error: 'OpenAI analysis failed' });
  }
});

module.exports = router;
