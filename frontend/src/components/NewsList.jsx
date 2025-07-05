function NewsList({ news }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">📰 General News</h2>
      { news.length == 0 ? (
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      ) :
        (<ul className="space-y-2 max-h-128 overflow-y-scroll no-scrollbar">
        {news.map((item, index) => (
          <li key={index} className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:shadow-md transition text-gray-300 font-semibold">
            <a
              href={item.link}
              className="text-gray-400 hover:text-yellow-400 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>)}
    </div>
  );
}

export default NewsList;
