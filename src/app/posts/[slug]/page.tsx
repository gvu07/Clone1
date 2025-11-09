// Generate static params for all known posts
export async function generateStaticParams() {
  const posts = [
    'hello-tokyo',
    'sponsorship-forwarding',
    'art-of-building-open-source',
    'why-vitest',
    'development-workflow',
    'type-challenges-journey',
  ];

  return posts.map((slug) => ({
    slug: slug,
  }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
    // This is a placeholder - in a real app you'd fetch the post data
    const post = {
      title: params.slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      date: '2024-01-15',
      content: `
  # ${params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
  
  This is a sample blog post. In a real application, you would fetch the actual content from a CMS, markdown files, or a database.
  
  ## Introduction
  
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  
  ## Main Content
  
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  
  ### Subsection
  
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  
  ## Conclusion
  
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `.trim(),
    };
  
    return (
      <main className="min-h-screen px-7 py-10 pt-32 overflow-x-hidden">
        <div className="prose mx-auto">
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0ms' }}>
            <a href="/posts" className="text-sm text-gray-400 hover:text-white transition-colors mb-4 inline-block">
              ← Back to all posts
            </a>
            <h1 className="mb-2">{post.title}</h1>
            <div className="text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
            </div>
          </div>
  
          <article className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="prose-headings:text-white prose-p:text-gray-300 prose-a:text-gray-200 prose-a:hover:text-white prose-strong:text-white prose-code:text-gray-300">
              {post.content.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index}>{line.slice(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index} className="mt-8 mb-4">{line.slice(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="mt-6 mb-3">{line.slice(4)}</h3>;
                } else if (line.trim()) {
                  return <p key={index}>{line}</p>;
                }
                return null;
              })}
            </div>
          </article>
  
          <div className="mt-12 pt-8 border-t border-gray-800 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <a href="/posts" className="text-gray-400 hover:text-white transition-colors">
              ← Back to all posts
            </a>
          </div>
        </div>
      </main>
    );
  }