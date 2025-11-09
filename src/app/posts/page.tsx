import Link from 'next/link';

export default function PostsPage() {
    const posts = [
      {
        title: 'Hello Tokyo',
        date: '2024-01-15',
        description: 'My journey moving to Tokyo and starting a new chapter',
        slug: 'hello-tokyo',
      },
      {
        title: 'Sponsorship Forwarding',
        date: '2023-12-10',
        description: 'How sponsorship forwarding works and why I do it',
        slug: 'sponsorship-forwarding',
      },
      {
        title: 'The Art of Building Open Source',
        date: '2023-11-05',
        description: 'Lessons learned from maintaining popular open source projects',
        slug: 'art-of-building-open-source',
      },
      {
        title: 'Why Vitest',
        date: '2023-10-20',
        description: 'The story behind creating Vitest and why we needed it',
        slug: 'why-vitest',
      },
      {
        title: 'My Development Workflow',
        date: '2023-09-15',
        description: 'Tools and practices that help me stay productive',
        slug: 'development-workflow',
      },
      {
        title: 'Type Challenges Journey',
        date: '2023-08-30',
        description: 'Creating Type Challenges and its impact on the TypeScript community',
        slug: 'type-challenges-journey',
      },
    ];
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto mb-8">
          <h1 className="mb-0">Blog</h1>
          <p className="text-gray-400 mt-4">
            Thoughts on programming, open source, and life
          </p>
        </div>
  
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group border-b border-gray-800 pb-6 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link href={`/posts/${post.slug}`} className="block">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h2 className="text-2xl font-semibold text-white group-hover:text-gray-100 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  }