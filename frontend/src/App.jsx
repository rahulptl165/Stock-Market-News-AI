import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [news, setNews] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:5000/api/news")
    .then((res) => {
      console.log(res.data);
      setNews(res.data);
    })
    .catch((err) => {
      console.error("Error fetching news:", err);
    });
}, []);


  return (
    <div className="App">
      <h1 className=''>📈 Stock Market News AI</h1>
      <h2 className='m-2 text-gray-100'>📰 General News</h2>
      <ul>
        {Array.isArray(news) && news.length > 0 ? (
          news.map((item, index) => <li key={index}><a href={item.link} className='text-white visited:text-white hover:text-white'>{item.title}</a></li>)
        ) : (
          <p>No news available or loading...</p>
        )}
      </ul>
    </div>
  );
}

export default App;
