export default function UsePage() {
    const setup = {
      hardware: [
        { category: 'Computer', item: 'MacBook Pro 14" M3 Max', details: '36GB RAM' },
        { category: 'Monitor', item: 'LG UltraFine 5K', details: '27-inch 5120x2880' },
        { category: 'Keyboard', item: 'Keychron K8 Pro', details: 'Brown switches' },
        { category: 'Mouse', item: 'Logitech MX Master 3S', details: 'For Mac' },
        { category: 'Headphones', item: 'Sony WH-1000XM5', details: 'Noise cancelling' },
        { category: 'Microphone', item: 'Blue Yeti', details: 'For streaming' },
        { category: 'Camera', item: 'Sony A7 III', details: 'For photography' },
      ],
      software: [
        { category: 'Editor', item: 'VS Code', details: 'Primary editor' },
        { category: 'Theme', item: 'Vitesse', details: 'My own theme' },
        { category: 'Font', item: 'JetBrains Mono', details: 'With ligatures' },
        { category: 'Terminal', item: 'iTerm2', details: 'With Oh My Zsh' },
        { category: 'Browser', item: 'Arc', details: 'Primary browser' },
        { category: 'Design', item: 'Figma', details: 'For UI/UX work' },
        { category: 'Notes', item: 'Notion', details: 'Knowledge base' },
      ],
      apps: [
        { category: 'Productivity', item: 'Raycast', details: 'Launcher & more' },
        { category: 'Window Mgmt', item: 'Rectangle', details: 'Window management' },
        { category: 'Screenshots', item: 'CleanShot X', details: 'Better screenshots' },
        { category: 'Git Client', item: 'Tower', details: 'GUI for Git' },
        { category: 'API Testing', item: 'Insomnia', details: 'REST & GraphQL' },
        { category: 'Database', item: 'TablePlus', details: 'Database GUI' },
      ],
    };
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">What I Use</h1>
          <p className="text-gray-400 mt-4">
            Hardware and software I use for development and content creation
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Hardware */}
          <section className="animate-fade-in" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Hardware</h2>
            <div className="space-y-4">
              {setup.hardware.map((item, index) => (
                <div
                  key={item.item}
                  className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">{item.category}</div>
                      <div className="text-white font-medium mb-1">{item.item}</div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Software */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Software</h2>
            <div className="space-y-4">
              {setup.software.map((item, index) => (
                <div
                  key={item.item}
                  className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">{item.category}</div>
                      <div className="text-white font-medium mb-1">{item.item}</div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Apps */}
          <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Apps & Tools</h2>
            <div className="space-y-4">
              {setup.apps.map((item, index) => (
                <div
                  key={item.item}
                  className="p-4 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1">{item.category}</div>
                      <div className="text-white font-medium mb-1">{item.item}</div>
                      <div className="text-sm text-gray-400">{item.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
  
          {/* Note */}
          <div className="text-center text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p>This setup evolves over time. Last updated: January 2024</p>
          </div>
        </div>
      </main>
    );
  }