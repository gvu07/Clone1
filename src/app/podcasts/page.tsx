export default function PodcastsPage() {
    const episodes = [
      {
        number: 1,
        title: 'Placeholder Episode',
        date: 'Placeholder Date',
        duration: 'Placeholder Duration',
        description: 'Placeholder Description',
      },
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Podcasts</h1>
          <p className="text-gray-400 mt-4">
            Co-hosting <em>No Coding Today</em> - A podcast about programming and life
            <span className="opacity-75 ml-2">(in Mandarin)</span>
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <article
                key={episode.number}
                className="group p-6 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                      <span className="font-mono">EP {episode.number}</span>
                      <span>•</span>
                      <time dateTime={episode.date}>{episode.date}</time>
                      <span>•</span>
                      <span>{episode.duration}</span>
                    </div>
                    <h2 className="text-xl font-semibold text-white group-hover:text-gray-100 transition-colors mb-2">
                      {episode.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {episode.description}
                    </p>
                  </div>
                  <button className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-colors">
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
  
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-gray-400 mb-4">Listen on</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://bento.me/nocodingtoday"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Bento
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
