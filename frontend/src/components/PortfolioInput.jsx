import { useState, useEffect } from 'react';

function PortfolioInput({ onUpdate }) {
  const [input, setInput] = useState('');
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio");
    if (saved) {
      const parsed = JSON.parse(saved);
      setPortfolio(parsed);
      onUpdate(parsed);
    }
  }, []);

  const handleAdd = () => {
    const stocks = input.split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
    const updated = [...new Set([...portfolio, ...stocks])];
    setPortfolio(updated);
    localStorage.setItem("portfolio", JSON.stringify(updated));
    onUpdate(updated);
    setInput("");
  };

  const handleRemove = (name) => {
    const updated = portfolio.filter(s => s !== name);
    setPortfolio(updated);
    localStorage.setItem("portfolio", JSON.stringify(updated));
    onUpdate(updated);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="mb-6 p-4">
      <h2 className="text-2xl font-bold text-white mb-4">🎯 Add Portfolio Stocks</h2>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          placeholder="Enter stock name (comma separated, e.g., RELIANCE, TCS)"
        />
        <button onClick={handleAdd} className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500 transition">
          Add
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {portfolio.map((name, idx) => (
          <span
            key={idx}
            className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {name}
            <button onClick={() => handleRemove(name)} className='text-red-100 hover:text-red-500'>✖</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default PortfolioInput;