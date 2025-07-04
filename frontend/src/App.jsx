import { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioInput from './components/PortfolioInput';
import NewsList from './components/NewsList';
import FilteredNews from './components/FilteredNews';

function App() {
  const [news, setNews] = useState([]);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">📈 Stock Market News AI</h1>
      <PortfolioInput portfolio={portfolio} setPortfolio={setPortfolio} />
      <NewsList news={news} />
      <FilteredNews news={news} portfolio={portfolio} />
    </div>
  );
}

export default App;
