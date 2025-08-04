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
      const title = $(el).find('h2 a').text().trim();
      const link = $(el).find('h2 a').attr('href');
      const imgTag = $(el).find('img');

      let img = imgTag.attr('data-original')
            || imgTag.attr('data-src')
            || imgTag.attr('data')
            || imgTag.attr('src');

      if (
        img &&
        typeof img === 'string' &&
        !img.includes('grey_bg.gif')
      ) {
        if (!img.startsWith('http')) {
          img = `https:${img}`;
        }
        console.log(img);
        news.push({ title, link, img });
      }
    });


    res.json(news.slice(0, 100));
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
