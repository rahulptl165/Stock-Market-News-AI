function NewsList({ news }) {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">📰 General News</h2>

      {news.length === 0 ? (
        <p className="text-gray-400 text-sm animate-pulse">Loading...</p>
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 sm:px-0 max-h-[540px] min-h-48 overflow-scroll no-scrollbar">
          {news.map((item, index) => (
            <div
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title || "News image"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-medium hover:underline"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default NewsList;
