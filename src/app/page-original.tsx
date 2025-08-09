'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useState, useEffect } from 'react';

// Sample blog posts - in production, these would come from your content system
const featuredPosts = [
  {
    slug: 'understanding-working-memory',
    title: 'Understanding Working Memory: The Brain\'s Mental Workspace',
    date: '2025-01-08',
    summary: 'Exploring how our brain temporarily holds and manipulates information, and why it matters for everyday cognition',
    readTime: '8 min read'
  },
  {
    slug: 'longevity-myths-vs-evidence',
    title: 'Longevity Myths vs. Evidence: What Science Really Says',
    date: '2025-01-05',
    summary: 'Separating fact from fiction in the world of longevity science, from supplements to lifestyle interventions',
    readTime: '10 min read'
  },
  {
    slug: 'what-eeg-reveals-about-thinking',
    title: 'What EEG Reveals About Thinking',
    date: '2025-01-02',
    summary: 'How electroencephalography lets us peek into the brain\'s electrical conversations',
    readTime: '7 min read'
  }
];

export default function HomePage() {
  const [emailStatus, setEmailStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      if (res.ok) {
        setEmailStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setEmailStatus('error');
      }
    } catch {
      setEmailStatus('error');
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Hi, I'm {siteConfig.author.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-4">
            {siteConfig.tagline.split('|')[0].trim()}
          </p>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/research" 
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center justify-center"
            >
              Explore My Research
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-cyan-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Neuroscience Research</h3>
              <p className="text-slate-600">
                Investigating working memory, attention, and decision-making through EEG and computational modeling
              </p>
              <Link href="/research" className="text-cyan-600 hover:underline mt-4 inline-block font-medium">
                View Research →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-cyan-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Science Communication</h3>
              <p className="text-slate-600">
                Making complex neuroscience accessible through writing, speaking, and educational initiatives
              </p>
              <Link href="/blog" className="text-cyan-600 hover:underline mt-4 inline-block font-medium">
                Read Blog →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-cyan-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Community Building</h3>
              <p className="text-slate-600">
                Leading Thinking About Thinking nonprofit to foster scientific curiosity and critical thinking
              </p>
              <Link href="/projects" className="text-cyan-600 hover:underline mt-4 inline-block font-medium">
                View Projects →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Latest Insights</h2>
              <Link href="/blog" className="text-cyan-600 hover:underline font-medium">
                View All Posts →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-cyan-200 hover:shadow-md transition-all">
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-cyan-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-3">
                        {post.summary}
                      </p>
                      <div className="mt-4 text-cyan-600 font-medium group-hover:translate-x-1 transition-transform inline-block">
                        Read More →
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Featured Project</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Thinking About Thinking</h3>
              <p className="text-lg text-slate-600 mb-6">
                A nonprofit organization dedicated to making neuroscience accessible to everyone. We organize community events, 
                create educational content, and foster discussions about the brain, consciousness, and human behavior.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects#thinking-about-thinking" className="text-cyan-600 hover:underline font-medium">
                  Learn More About ThAT →
                </Link>
                <span className="hidden sm:block text-slate-400">|</span>
                <a href="https://thinkingaboutthinking.org" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-medium">
                  Visit Website ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay Connected</h2>
            <p className="text-lg text-slate-600 mb-8">
              Get weekly insights on neuroscience, evidence-based health, and the latest research delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 max-w-sm"
              />
              <button
                type="submit"
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            {emailStatus === 'success' && (
              <p className="mt-4 text-green-600">Thanks for subscribing! Check your email for confirmation.</p>
            )}
            {emailStatus === 'error' && (
              <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
            )}
            <p className="mt-4 text-sm text-slate-500">
              No spam, unsubscribe anytime. Read past issues on <a href="#" className="text-cyan-600 hover:underline">Substack</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
