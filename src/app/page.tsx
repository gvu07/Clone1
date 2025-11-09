import Link from 'next/link';

export default function Home() {
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0ms' }}>
          <h1 className="mb-0">Anthony Fu</h1>
        </div>
  
        <article className="prose mx-auto">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <p>Hey! I'm Anthony Fu, a fanatical open sourceror and design engineer.</p>
  
            <p className="space-x-2">
              <span>Working at</span>
              <a href="https://nuxtlabs.com" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/2457380849.png" alt="NuxtLabs" className="w-4 h-4 inline-block rounded" />
                NuxtLabs
              </a>
              <span>/</span>
              <a href="https://vercel.com" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/867116428.png" alt="Vercel" className="w-4 h-4 inline-block rounded" />
                Vercel
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Creator of</span>
              <a href="https://github.com/vitest-dev/vitest" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/2926129230.png" alt="Vitest" className="w-4 h-4 inline-block rounded" />
                Vitest
              </a>
              <a href="https://github.com/slidevjs/slidev" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/1115452572.png" alt="Slidev" className="w-4 h-4 inline-block rounded" />
                Slidev
              </a>
              <a href="https://github.com/vueuse/vueuse" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/406676907.png" alt="VueUse" className="w-4 h-4 inline-block rounded" />
                VueUse
              </a>
              <a href="https://github.com/unocss/unocss" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/3658792515.png" alt="UnoCSS" className="w-4 h-4 inline-block rounded" />
                UnoCSS
              </a>
              <a href="https://github.com/elk-zone/elk" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/3594348660.png" alt="Elk" className="w-4 h-4 inline-block rounded" />
                Elk
              </a>
              <a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/2017814209.png" alt="Type Challenges" className="w-4 h-4 inline-block rounded" />
                Type Challenges
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Core team of</span>
              <a href="https://github.com/vuejs/core" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/881807416.svg" alt="Vue" className="w-4 h-4 inline-block" />
                Vue
              </a>
              <a href="https://github.com/nuxt/nuxt" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/529651598.svg" alt="Nuxt" className="w-4 h-4 inline-block" />
                Nuxt
              </a>
              <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/265343117.svg" alt="Vite" className="w-4 h-4 inline-block" />
                Vite
              </a>
            </p>
  
            <p className="flex flex-wrap gap-x-2 items-center">
              <span>Maintaining</span>
              <a href="https://github.com/shikijs/shiki" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/3122429805.png" alt="Shiki" className="w-4 h-4 inline-block rounded" />
                Shiki
              </a>
              <a href="https://github.com/twoslashes/twoslash" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/1924971366.png" alt="Twoslash" className="w-4 h-4 inline-block rounded" />
                Twoslash
              </a>
              <a href="https://github.com/eslint-stylistic/eslint-stylistic" target="_blank" rel="noopener" className="inline-flex items-center gap-1">
                <img src="https://ext.same-assets.com/728248024/988862659.png" alt="ESLint Stylistic" className="w-4 h-4 inline-block rounded" />
                ESLint Stylistic
              </a>
            </p>
  
            <p>
              Dreaming up cool ideas and making them come true is where my passion lies. I am
              enthusiastic about building tools that help myself and others to be more productive
              and enjoy the process of crafting. You can find my <Link href="/projects">full projects list here</Link>.
            </p>
  
            <p>
              I give <Link href="/talks">talks</Link> and write <Link href="/posts">blog posts</Link> about open source, coding, etc.
              Occasionally, I do live coding streams on <a href="https://www.youtube.com/anthonyfu7" target="_blank" rel="noopener">YouTube</a> and{' '}
              <a href="https://space.bilibili.com/668380" target="_blank" rel="noopener">哔哩哔哩</a>.
              I am also co-hosting a podcast <a href="https://bento.me/nocodingtoday" target="_blank" rel="noopener"><em>No Coding Today</em></a>{' '}
              <span className="opacity-75">(in Mandarin)</span>, talking about various topics around programming.
              From time to time, I make some generative-art, interactivity experiments on{' '}
              <a href="https://100.antfu.me/" target="_blank" rel="noopener">100.antfu.me</a>.
            </p>
  
            <p>
              Outside of programming, I enjoy doing photography and traveling. I post{' '}
              <Link href="/photos">photos on this page</Link>. I also love anime, movies and dramas, I am trying to list my{' '}
              <Link href="/media">media consumption</Link>. Also, in case you are interested, here are the{' '}
              <Link href="/use">hardware/software I use</Link>.
            </p>
  
            <p>
              I recently <Link href="/posts/hello-tokyo">moved to <ruby lang="ja">東京<rp>(</rp><rt>Tokyo</rt><rp>)</rp></ruby></Link>,
              if you are around, please reach out and let's have some coffee or work together.
            </p>
  
            <hr />
  
            <p>Find me on</p>
  
            <p className="flex flex-wrap gap-2 -mt-2">
              <a href="https://github.com/antfu" target="_blank" className="hover:underline">GitHub</a>
              <a href="https://bsky.app/profile/antfu.me" target="_blank" className="hover:underline">Bluesky</a>
              <a href="https://www.threads.net/@antfu7" target="_blank" className="hover:underline">Threads</a>
              <a href="https://chat.antfu.me" target="_blank" className="hover:underline">Discord Server</a>
              <a href="https://www.youtube.com/anthonyfu7" target="_blank" className="hover:underline">YouTube</a>
              <a href="https://www.instagram.com/antfu7" target="_blank" className="hover:underline">Instagram</a>
              <a href="https://space.bilibili.com/668380" target="_blank" className="hover:underline">哔哩哔哩</a>
              <a href="https://x.com/antfuzh" target="_blank" className="hover:underline">中文推</a>
              <a href="https://x.com/antfujp" target="_blank" className="hover:underline">日本語</a>
            </p>
  
            <p>
              Or mail me at <span className="font-mono">hi@antfu.me</span>
            </p>
  
            <p>
              <span className="opacity-50">(</span> Inactive on{' '}
              <span className="inline-flex flex-wrap gap-2">
                <a href="https://elk.zone/m.webtoo.ls/@antfu" target="_blank" className="hover:underline">Mastodon</a>
                <a href="https://x.com/antfu7" target="_blank" className="hover:underline">Twitter</a>
                <a href="https://www.zhihu.com/people/antfu" target="_blank" className="hover:underline">知乎</a>
                <a href="https://weibo.com/u/7485197193" target="_blank" className="hover:underline">微博</a>
              </span>{' '}
              <span className="opacity-50">)</span>
            </p>
  
            <p className="mt-8">
              If you enjoy my work and find them useful, consider sponsor me and the ecosystem to
              help Open Source sustainable. Thank you!
            </p>
  
            <p className="flex flex-wrap gap-2 items-center">
              <a
                href="https://opencollective.com/antfu"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 text-base bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded transition-colors text-rose-300 hover:text-rose-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Sponsor the Ecosystem
              </a>
              <span className="text-sm opacity-50">
                <Link href="/posts/sponsorship-forwarding" className="hover:underline">
                  How does this work?
                </Link>
              </span>
            </p>
  
            <p className="flex flex-wrap gap-2">
              <a
                href="https://github.com/sponsors/antfu"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded transition-colors text-rose-300 hover:text-rose-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Sponsor to support Anthony
              </a>
              <a
                href="https://afdian.com/a/antfu"
                target="_blank"
                className="inline-flex items-center gap-2 px-3 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded transition-colors text-yellow-300 hover:text-yellow-200 no-underline"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
                在爱发电上支持我
              </a>
            </p>
          </div>
        </article>
  
        <div className="mt-10 mb-6 prose mx-auto">
          <span className="text-sm opacity-50">
            <a
              target="_blank"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              className="hover:underline"
            >
              CC BY-NC-SA 4.0
            </a>{' '}
            2021-PRESENT © Anthony Fu
          </span>
        </div>
      </main>
    );
  }
  