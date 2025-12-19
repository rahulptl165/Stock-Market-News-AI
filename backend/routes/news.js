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
    const title = $(el).find('h2').first().text().trim();
    const link = $(el).find('a.unified-link').first().attr('href');
    
    const imgTag = $(el).find('img').first();
    let img =
      imgTag.attr('data-src') ||
      imgTag.attr('data-original') ||
      imgTag.attr('data') ||
      imgTag.attr('src');

    if (!title || !link || !img) return;

    if (img.startsWith('//')) img = `https:${img}`;

    if (img.includes('grey_bg.gif')) return;

    news.push({ title, link, img });
  });


    res.json(news.slice(0, 100));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
