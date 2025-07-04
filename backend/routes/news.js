const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://www.moneycontrol.com/news/business/markets/');
    const $ = cheerio.load(data);
    const news = [];

    $('li.clearfix').each((i, el) => {
      const title = $(el).find('h2').text().trim();
      const link = $(el).find('a').attr('href');
      if (title) news.push({ title, link });
    });

    res.json(news.slice(0, 100));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
