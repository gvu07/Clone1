export default function MediaPage() {
    const media = {
      watching: [
        { title: 'Frieren: Beyond Journey\'s End', type: 'Anime', rating: '★★★★★', year: '2023' },
        { title: 'The Last of Us', type: 'Series', rating: '★★★★★', year: '2023' },
        { title: 'Succession', type: 'Series', rating: '★★★★★', year: '2023' },
      ],
      recentlyWatched: [
        { title: 'Oppenheimer', type: 'Movie', rating: '★★★★★', year: '2023' },
        { title: 'Chainsaw Man', type: 'Anime', rating: '★★★★★', year: '2022' },
        { title: 'The Bear', type: 'Series', rating: '★★★★★', year: '2023' },
        { title: 'Spider-Man: Across the Spider-Verse', type: 'Movie', rating: '★★★★★', year: '2023' },
        { title: 'Cyberpunk: Edgerunners', type: 'Anime', rating: '★★★★★', year: '2022' },
        { title: 'Everything Everywhere All at Once', type: 'Movie', rating: '★★★★★', year: '2022' },
      ],
    };
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Media</h1>
          <p className="text-gray-400 mt-4">
            Anime, movies, and series I'm watching or have watched
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Currently Watching */}
          <section className="animate-fade-in" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Currently Watching</h2>
            <div className="space-y-4">
              {media.watching.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-400">{item.type}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{item.year}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-yellow-400">{item.rating}</span>
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Watching"></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Recently Watched */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Recently Watched</h2>
            <div className="space-y-4">
              {media.recentlyWatched.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-400">{item.type}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{item.year}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-yellow-400">{item.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Note */}
          <div className="text-center text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <p>Rating system: ★★★★★ (5 stars maximum)</p>
          </div>
        </div>
      </main>
    );
  }