import Link from 'next/link';

export default function Home() {
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0ms' }}>
          <h1 className="mb-0">Giang Anh Vu</h1>
        </div>
  
        <article className="prose mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <p>Hi! I'm Giang Anh Vu, a Mechanical Engineering Student at the University of Michigan - Ann Arbor, and I love programming.</p>
  
            <p className="space-x-2">
              <span>Working at</span>
              <a href="https://space.engin.umich.edu/magnetometer-laboratory/" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://space.engin.umich.edu/wp-content/uploads/sites/567/2022/06/LabLogo-2021-11-08-02.jpg" alt="MagLab" className="w-4 h-4 inline-block rounded" />
                MagLab
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Creator of</span>
              <a href="https://github.com/gvu07/Lucentia" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" className="w-4 h-4 inline-block rounded" />
                Lucentia
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Core team of</span>
              <a href="https://umeb.engin.umich.edu/" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://se-images.campuslabs.com/clink/images/b96e1d8e-2dea-4fd0-88ab-f8f13fa1e40dafaa7082-e235-4e9b-803b-4521b92aa387.png?preset=med-sq" 
                alt="UMEB" className="w-4 h-4 inline-block" />
                UMEB
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Social Media</span>
              <a href="https://www.linkedin.com/in/giang-anh-d-vu/" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/500px-LinkedIn_logo_initials.png" alt="LinkedIn" className="w-4 h-4 inline-block rounded" />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/gi.d.vu/" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt="Instagram" className="w-4 h-4 inline-block rounded" />
                Instagram
              </a>
              <a href="https://www.youtube.com/@GiangAnhDVu" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1200px-YouTube_full-color_icon_%282017%29.svg.png" alt="YouTube" className="w-4 h-4 inline-block rounded" />
                YouTube
              </a>
            </p>
  
            <p>
              Dreaming up cool ideas and making them come true is where my passion lies. I am
              enthusiastic about building tools that help myself and others to be more productive
              and enjoy the process of crafting. You can find my <Link href="/projects">full projects list here</Link>.
            </p>
  
            <p>
              I intend to post videos on <a href="https://www.youtube.com/@GiangAnhDVu" target="_blank" rel="noopener">YouTube</a> and{' '} workout, I want to post my journey on social media so that I can keep you updated.
            </p>
  
            <p>
              Outside of learning and, I enjoy doing photography and traveling. I post{' '}
              <Link href="/photos">photos on this page</Link>. I also love anime, movies and reading novels and manga, I am trying to list my{' '}
              <Link href="/media">media consumption</Link>.
            </p>

            <hr />
  
            <p>Find me at: contact@gianganhvu.com | gvu@umich.edu</p>
  
            <p className="flex flex-wrap gap-2 -mt-2">
              <a href="https://github.com/gvu07" target="_blank" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/giang-anh-d-vu/" target="_blank" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com/gi.d.vu/" target="_blank" className="hover:underline">Instagram</a>
              <a href="https://www.youtube.com/@GiangAnhDVu" target="_blank" className="hover:underline">YouTube</a>
            </p>
  
            <p className="mt-8">
              If you enjoy my work please consider supporting me or working with me, I am open to ideas.
            </p>
  
            <p className="flex flex-wrap gap-2 items-center">
              <a
                href="mailto:contact@gianganhvu.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 text-base bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded transition-colors text-rose-300 hover:text-rose-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Contact Me
              </a>
            </p>
  
            <p className="flex flex-wrap gap-2">
              <a
                href="mailto:contact@gianganhvu.com"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded transition-colors text-rose-300 hover:text-rose-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Work with Me
              </a>
              <a
                href="mailto:gvu@umich.edu"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded transition-colors text-yellow-300 hover:text-yellow-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                  Learn with Me
              </a>
            </p>
          </div>
        </article>
  
        <div className="mt-10 mb-6 prose mx-auto">
          <span className="text-sm opacity-50">
            <a
              target="_blank"
              href="mailto:contact@gianganhvu.com"
              className="hover:underline"
            >
              Contact Me
            </a>{' '}
            2025-PRESENT © Giang Anh Vu
          </span>
        </div>
      </main>
    );
  }
  
