import { useEffect, useState } from 'react';
import axios from 'axios';

function FilteredNews({ news, portfolio }) {
  const [analysisMap, setAnalysisMap] = useState({});

  const filtered = news.filter(item =>
    portfolio.some(symbol =>
      item.title.toLowerCase().includes(symbol.toLowerCase())
    )
  );

  useEffect(() => {
    filtered.forEach(item => {
      if (!analysisMap[item.title]) {
        axios
          .post('https://stock-market-news-ai.vercel.app/api/analyze', { title: item.title })
          .then(res => {
            setAnalysisMap(prev => ({
              ...prev,
              [item.title]: res.data.analysis
            }));
          })
          .catch(err => {
            console.error('AI error:', err);
            setAnalysisMap(prev => ({
              ...prev,
              [item.title]: 'Impact: Neutral\nReason: AI analysis failed.'
            }));
          });
      }
    });
  }, [filtered]);

  const parseAnalysis = text => {
    const lines = text.split('\n');
    const impact = lines.find(l => l.toLowerCase().startsWith('impact'))?.split(':')[1]?.trim() || 'Unknown';
    const reason = lines.find(l => l.toLowerCase().startsWith('reason'))?.split(':')[1]?.trim() || 'No reason given.';
    return { impact, reason };
  };

  const impactColor = impact => {
    switch (impact.toLowerCase()) {
      case 'positive': return 'text-green-400';
      case 'negative': return 'text-red-400';
      case 'neutral': return 'text-yellow-400';
      default: return 'text-gray-300';
    }
  };

  return (
    <div id='matching-news' className="bg-gray-900 p-4 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">🎯 AI Analysis of Your Portfolio News</h2>

      {filtered.length > 0 ? (
        <div className="space-y-4 max-h-[520px] overflow-y-auto no-scrollbar">
          {filtered.map((item, index) => {
            const analysis = analysisMap[item.title];
            const { impact, reason } = analysis ? parseAnalysis(analysis) : {};

            return (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:shadow-lg transition"
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-400 hover:text-yellow-400 hover:underline"
                >
                  {item.title}
                </a>

                {analysis ? (
                  <div className="mt-3 text-sm">
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-gray-400">Impact:</span>
                      <span className={`font-semibold ${impactColor(impact)}`}>{impact}</span>
                    </p>
                    <p className="text-gray-300 mt-1">
                      <span className="font-medium">Reason:</span> {reason}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-400 mt-2 text-sm">Analyzing...</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No matching news for your portfolio.</p>
      )}
    </div>
  );
}

export default FilteredNews;
