export default function TalksPage() {
    const talks = [
      {
        title: 'Placeholder Talk',
        event: 'Placeholder Event',
        date: 'Placeholder Date',
        description: 'Placeholder Description',
      },
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Talks</h1>
          <p className="text-gray-400 mt-4">
            Conference talks and presentations
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {talks.map((talk, index) => (
              <div
                key={talk.title}
                className="border-l-2 border-gray-800 pl-6 pb-8 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-gray-700 border-2 border-gray-900" />
                  <div className="text-sm text-gray-500 mb-2">{talk.date}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {talk.title}
                  </h3>
                  <div className="text-sm text-gray-400 mb-3">{talk.event}</div>
                  <p className="text-gray-400 leading-relaxed">
                    {talk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
  
