import { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioInput from './components/PortfolioInput';
import NewsList from './components/NewsList';
import FilteredNews from './components/FilteredNews';
import Footer from './components/Footer'

function App() {
  const [news, setNews] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get('https://stock-market-news-ai.vercel.app/api/news')
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">📈 Stock Market News AI</h1>
      <PortfolioInput onUpdate={setPortfolio} />
      <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className='flex-1'><NewsList news={news} /></div>
        <div className='flex-1'><FilteredNews news={news} portfolio={portfolio} /></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
