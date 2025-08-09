import { getPostData, getAllPostIds } from '@/lib/posts';
import { MDXComponents } from '@/components/mdx-components';
import { compileMDX } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map(post => ({
    slug: post.params.slug
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postData = await getPostData(slug);

  const { content, frontmatter } = await compileMDX({
    source: postData.content,
    components: MDXComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <article>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">{frontmatter.title as string}</h1>
        <p className="text-slate-500 text-sm mb-8">{frontmatter.date as string}</p>
        {content}
      </article>
    </div>
  );
}
