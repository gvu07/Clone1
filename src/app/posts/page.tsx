import Link from 'next/link';

export default function PostsPage() {
    const posts = [
      {
        title: 'Placeholder Post',
        date: 'Placeholder Date',
        description: 'Placeholder Description',
        slug: 'placeholder-post',
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
