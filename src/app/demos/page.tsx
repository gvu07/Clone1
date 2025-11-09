export default function DemosPage() {
    const demos = [
      {
        title: 'Generative Art #42',
        description: 'Interactive particle system with physics simulation',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
        url: 'https://100.antfu.me/042',
      },
      {
        title: 'Generative Art #35',
        description: 'Recursive fractal patterns with color gradients',
        image: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400',
        url: 'https://100.antfu.me/035',
      },
      {
        title: 'Generative Art #28',
        description: 'Wave interference patterns in WebGL',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400',
        url: 'https://100.antfu.me/028',
      },
      {
        title: 'Generative Art #21',
        description: 'Perlin noise terrain generation',
        image: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400',
        url: 'https://100.antfu.me/021',
      },
      {
        title: 'Generative Art #14',
        description: 'Animated cellular automata',
        image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400',
        url: 'https://100.antfu.me/014',
      },
      {
        title: 'Generative Art #07',
        description: 'Sine wave synthesis and visualization',
        image: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=400',
        url: 'https://100.antfu.me/007',
      },
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Demos & Experiments</h1>
          <p className="text-gray-400 mt-4">
            Interactive demos, generative art, and creative coding experiments
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, index) => (
              <a
                key={demo.title}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:border-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-colors mb-2">
                    {demo.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
  
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a
              href="https://100.antfu.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white"
            >
              View all experiments
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>
    );
  }