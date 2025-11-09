export default function SponsorsPage() {
    const sponsors = {
        Work: [
            { name: 'MagLab', logo: 'https://space.engin.umich.edu/wp-content/uploads/sites/567/2022/06/LabLogo-2021-11-08-02.jpg', url: 'https://space.engin.umich.edu/' },
        ],
        Sponsorships: [
            { name: 'Aelfriceden', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabHDNyHOMI51qMv0ZqeWDWV3H3yIciNuTOw&s', url: 'https://www.aelfriceden.com/' },
        ],
        Scholarships: [
            { name: 'MCPS Foundation Scholarship', logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQE0UbfypNDTEw/company-logo_200_200/company-logo_200_200/0/1631340310617?e=2147483647&v=beta&t=8MR89xsGTTAyGjdnJUaDl28MN0wZ8zcLz0Wsb-fJl-0', url: 'https://www.mcpsfoundation.org/refresh/campaigns/patricia-oneill' },
        ],
    };
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Sponsors</h1>
          <p className="text-gray-400 mt-4">
            Thank you to all the amazing sponsors who support my open source work!
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Sponsors */}
          <section className="animate-fade-in" style={{ animationDelay: '0ms' }}>
            <h2 className="text-2xl font-semibold text-white mb-6">Work Sponsors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsors.Work.map((sponsor, index) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-8 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-24 h-24 object-contain"
                  />
                </a>
              ))}
            </div>
          </section>
  
          {/* Sponsorships Sponsors */}
          <section className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-xl font-semibold text-white mb-6">Sponsorships Sponsors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors.Sponsorships.map((sponsor, index) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-16 h-16 object-contain"
                  />
                </a>
              ))}
            </div>
          </section>
  
          {/* Scholarships Sponsors */}
          <section className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-lg font-semibold text-white mb-6">Scholarships Sponsors</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {sponsors.Scholarships.map((sponsor, index) => (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-900/30 hover:bg-gray-900/50 border border-gray-800 rounded-lg transition-all duration-300 hover:border-gray-700"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-12 h-12 object-contain"
                  />
                </a>
              ))}
            </div>
          </section>
  
          {/* Call to Action */}
          <div className="text-center pt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-gray-400 mb-6">
              Want to support my open source work?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/sponsors/antfu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-lg transition-colors text-rose-300 hover:text-rose-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
