function NewsList({ news }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">📰 General News</h2>
      <ul className="space-y-2 max-h-128 overflow-y-scroll no-scrollbar">
        {news.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="text-white hover:text-yellow-400 hover:underline"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
