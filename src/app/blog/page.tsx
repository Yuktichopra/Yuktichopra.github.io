import Link from 'next/link';

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

async function getSubstackPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/substack-posts`, { cache: 'no-store' });
    if (!res.ok) {
      console.error('Failed to fetch Substack posts:', res.status, res.statusText);
      return [];
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return [];
  }
}

export default async function BlogIndexPage() {
  const allPostsData = await getSubstackPosts();

  return (
    <div className="container-narrow py-12">
      <h1 className="text-lg font-normal mb-8" style={{ color: 'var(--navy)' }}>Writing</h1>

      <section>
        <h2 className="text-sm font-normal mb-6" style={{ color: 'var(--navy)' }}>Latest from Substack</h2>
        <div className="space-y-6">
          {allPostsData.length > 0 ? (
            allPostsData.map((post) => (
              <div 
                key={post.link} 
                className="p-4 border rounded" 
                style={{ borderColor: 'var(--lighter-gray)', backgroundColor: 'var(--white)' }}
              >
                <h3 className="text-sm font-normal mb-2">
                  <Link 
                    href={post.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover-underline"
                    style={{ color: 'var(--navy)' }}
                  >
                    {post.title} ↗
                  </Link>
                </h3>
                <p className="text-xs text-muted mb-3">
                  {new Date(post.pubDate).toLocaleDateString()}
                </p>
                <p 
                  className="text-sm mb-4" 
                  style={{ color: 'var(--dark-gray)' }}
                  dangerouslySetInnerHTML={{ __html: post.description.substring(0, 150) + '...' }}
                />
                <Link 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm hover-underline inline-flex items-center"
                  style={{ color: 'var(--navy)' }}
                >
                  Read on Substack →
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-sm text-muted">
              Failed to load blog posts from Substack or no posts found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}