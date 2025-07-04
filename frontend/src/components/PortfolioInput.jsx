import { useState } from 'react';


function PortfolioInput({ portfolio, setPortfolio }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    const symbol = input.trim().toUpperCase();
    if (symbol && !portfolio.includes(symbol)) {
      setPortfolio([...portfolio, symbol]);
      setInput('');
    }
  };

  const handleRemove = (symbol) => {
    setPortfolio(portfolio.filter((s) => s !== symbol));
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">🎯 Add Portfolio Stocks</h2>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-3 py-2 rounded text-gray-400 border border-0.5"
          placeholder="Enter stock symbol"
        />
        <button onClick={handleAdd} className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-300">
          Add
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {portfolio.map((symbol, idx) => (
          <span
            key={idx}
            className="bg-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
          >
            {symbol}
            <button onClick={() => handleRemove(symbol)}>✖</button>
          </span>
        ))}
      </div>
    </div>
  );
}

export default PortfolioInput;