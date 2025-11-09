export default function ProjectsPage() {
    const projects = [
      {
        name: 'Vitest',
        description: 'A blazing fast unit test framework powered by Vite',
        link: 'https://github.com/vitest-dev/vitest',
        logo: 'https://ext.same-assets.com/728248024/2926129230.png',
      },
      {
        name: 'Slidev',
        description: 'Presentation slides for developers',
        link: 'https://github.com/slidevjs/slidev',
        logo: 'https://ext.same-assets.com/728248024/1115452572.png',
      },
      {
        name: 'VueUse',
        description: 'Collection of essential Vue Composition Utilities',
        link: 'https://github.com/vueuse/vueuse',
        logo: 'https://ext.same-assets.com/728248024/406676907.png',
      },
      {
        name: 'UnoCSS',
        description: 'Instant on-demand atomic CSS engine',
        link: 'https://github.com/unocss/unocss',
        logo: 'https://ext.same-assets.com/728248024/3658792515.png',
      },
      {
        name: 'Elk',
        description: 'A nimble Mastodon web client',
        link: 'https://github.com/elk-zone/elk',
        logo: 'https://ext.same-assets.com/728248024/3594348660.png',
      },
      {
        name: 'Type Challenges',
        description: 'Collection of TypeScript type challenges',
        link: 'https://github.com/type-challenges/type-challenges',
        logo: 'https://ext.same-assets.com/728248024/2017814209.png',
      },
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Projects</h1>
          <p className="text-gray-400 mt-4">
            Open source projects I've created or maintain
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-600 group-hover:text-gray-400 transition-all group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    );
  }
  