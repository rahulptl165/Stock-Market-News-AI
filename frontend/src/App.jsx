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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
        <h1 className="font-medium text-white sm:text-sm">📈 EquityEye</h1>
        <a
          href="#matching-news"
          className="text-xl font-bold text-blue-400 hover:underline mr-2"
        >
          Portfolio News
        </a>
      </div>
      <div>
        <PortfolioInput onUpdate={setPortfolio} />
        <div className='flex flex-col '>
          <div className='flex-1'><NewsList news={news} /></div>
          <div className='flex-1'><FilteredNews news={news} portfolio={portfolio} /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
