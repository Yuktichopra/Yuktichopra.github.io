'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import NeuralDecoration from '@/components/neural-decoration';

// Sample blog posts - in production, these would come from your content system
const featuredPosts = [
  {
    slug: 'understanding-working-memory',
    title: 'Understanding Working Memory: The Brain\'s Mental Workspace',
    date: '2025-01-08',
    summary: 'Exploring how our brain temporarily holds and manipulates information, and why it matters for everyday cognition',
    readTime: '8 min read',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    slug: 'longevity-myths-vs-evidence',
    title: 'Longevity Myths vs. Evidence: What Science Really Says',
    date: '2025-01-05',
    summary: 'Separating fact from fiction in the world of longevity science, from supplements to lifestyle interventions',
    readTime: '10 min read',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    slug: 'what-eeg-reveals-about-thinking',
    title: 'What EEG Reveals About Thinking',
    date: '2025-01-02',
    summary: 'How electroencephalography lets us peek into the brain\'s electrical conversations',
    readTime: '7 min read',
    gradient: 'from-teal-500 to-green-600'
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
      {/* Hero Section with Neural Pattern */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-purple-50 opacity-50" />
        
        {/* Neural decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 -mt-48 -mr-48">
          <NeuralDecoration className="w-full h-full opacity-20" />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 -mb-48 -ml-48">
          <NeuralDecoration className="w-full h-full opacity-20 rotate-180" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">{siteConfig.author.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-4">
              <span className="gradient-text-warm font-semibold">Neuroscientist</span> | 
              <span className="text-purple-600 font-semibold"> Science Communicator</span> | 
              <span className="text-teal-600 font-semibold"> PhD</span>
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              {siteConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/research" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg inline-flex items-center justify-center"
              >
                Explore My Research
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/about" 
                className="bg-white/80 backdrop-blur-sm border-2 border-transparent bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-8 py-3 rounded-xl text-lg font-semibold hover:from-purple-200 hover:to-pink-200 transform hover:scale-105 transition-all shadow-md"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas with Gradient Cards */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            What I <span className="gradient-text">Do</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Neuroscience Research Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Neuroscience Research</h3>
                <p className="text-slate-600 mb-4">
                  Investigating working memory, attention, and decision-making through EEG and computational modeling
                </p>
                <Link href="/research" className="gradient-text font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  View Research 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Science Communication Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Science Communication</h3>
                <p className="text-slate-600 mb-4">
                  Making complex neuroscience accessible through writing, speaking, and educational initiatives
                </p>
                <Link href="/blog" className="gradient-text-warm font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  Read Blog 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Community Building Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover-lift">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Community Building</h3>
                <p className="text-slate-600 mb-4">
                  Leading Thinking About Thinking nonprofit to foster scientific curiosity and critical thinking
                </p>
                <Link href="/projects" className="text-teal-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                  View Projects 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts with Color Accents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                Latest <span className="gradient-text-warm">Insights</span>
              </h2>
              <Link href="/blog" className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center">
                View All Posts 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative bg-white p-6 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all hover-lift overflow-hidden">
                      {/* Gradient accent on hover */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${post.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform`} />
                      
                      <div className="flex items-center text-sm text-slate-500 mb-3">
                        <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-3">
                        {post.summary}
                      </p>
                      <div className={`mt-4 font-medium bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform inline-block`}>
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

      {/* Featured Project with Glass Effect */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 neural-pattern" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 opacity-70" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Featured <span className="gradient-text">Project</span>
            </h2>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold gradient-text-warm mb-4">Thinking About Thinking</h3>
              <p className="text-lg text-slate-600 mb-6">
                A nonprofit organization dedicated to making neuroscience accessible to everyone. We organize community events, 
                create educational content, and foster discussions about the brain, consciousness, and human behavior.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects#thinking-about-thinking" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-md"
                >
                  Learn More About ThAT
                </Link>
                <a 
                  href="https://thinkingaboutthinking.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transform hover:scale-105 transition-all shadow-md inline-flex items-center"
                >
                  Visit Website 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-white via-cyan-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay <span className="gradient-text-warm">Connected</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get weekly insights on neuroscience, evidence-based health, and the latest research delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="flex-grow px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent max-w-sm bg-white/80 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Subscribe
              </button>
            </form>
            {emailStatus === 'success' && (
              <p className="mt-4 text-green-600 font-medium">Thanks for subscribing! Check your email for confirmation.</p>
            )}
            {emailStatus === 'error' && (
              <p className="mt-4 text-red-600 font-medium">Something went wrong. Please try again.</p>
            )}
            <p className="mt-4 text-sm text-slate-500">
              No spam, unsubscribe anytime. Read past issues on <a href="#" className="gradient-text hover:underline">Substack</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}