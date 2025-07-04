function FilteredNews({ news, portfolio }) {
  const filtered = news.filter(item =>
    portfolio.some(symbol =>
      item.title.toLowerCase().includes(symbol.toLowerCase())
    )
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">🎯 News Matching Your Portfolio</h2>
      {filtered.length > 0 ? (
        <ul className="space-y-2">
          {filtered.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="text-green-300 hover:text-yellow-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No matching news yet for your portfolio.</p>
      )}
    </div>
  );
}

export default FilteredNews;