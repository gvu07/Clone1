'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-5 py-5 backdrop-blur-sm bg-black/20">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/" className="w-12 h-12 block select-none outline-none">
          <img
            src="https://ext.same-assets.com/728248024/1119018396.svg"
            alt="Logo"
            className="w-full h-full"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/posts" className="hidden md:inline-block hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/projects" className="hidden md:inline-block hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/talks" className="hidden md:inline-block hover:text-white transition-colors">
            Talks
          </Link>
          <Link href="/sponsors-list" className="hidden md:inline-block hover:text-white transition-colors">
            Sponsors
          </Link>
          <Link
            href="/podcasts"
            className="hidden md:block hover:text-white transition-colors"
            title="Podcasts"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </Link>
          <Link
            href="/photos"
            className="hover:text-white transition-colors"
            title="Photos"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </Link>
          <Link
            href="/demos"
            className="hover:text-white transition-colors"
            title="Demos"
          >
            
          </Link>
          <Link
            href="https://github.com/gvu07"
            target="_blank"
            className="hidden md:block hover:text-white transition-colors"
            title="GitHub"
          >

            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"/>
            </svg>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
