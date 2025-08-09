'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

// Import content files
import heroContent from '@/content/site/hero.json';
import timelineData from '@/content/site/timeline.json';
import currentlyContent from '@/content/site/currently.json';
import recentWritingContent from '@/content/site/recent-writing.json';
import contactContent from '@/content/site/contact.json';
import navigationContent from '@/content/site/navigation.json';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero - Ultra minimal */}
      <section className="container-narrow py-16">
        <div className="flex items-center justify-between">
          {/* Text content - vertically centered with logo */}
          <div className="flex-1">
            <h1 className="text-lg font-normal mb-3" style={{ color: 'var(--navy)' }}>
              {heroContent.name}
            </h1>
            <p className="text-sm text-muted mb-3">
              {heroContent.tagline}
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xl">
              {heroContent.description}
            </p>
          </div>
          
          {/* Logo aligned with text */}
          <div className="group relative ml-8">
            <Link href="/about-logo" className="block">
              <Image 
                src="/images/logo.png" 
                alt={heroContent.logoAlt} 
                width={150} 
                height={150} 
                className="cursor-pointer transition-transform hover:scale-105"
                priority
              />
            </Link>
            
            {/* Tooltip on hover */}
            <div className="absolute right-0 top-20 opacity-0 group-hover:opacity-100 transition-opacity z-10 px-3 py-2 text-xs rounded-lg shadow-lg whitespace-nowrap"
                 style={{ 
                   backgroundColor: 'rgba(30, 58, 95, 0.7)',
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '1px solid rgba(30, 58, 95, 0.3)',
                   color: 'var(--white)'
                 }}>
              <Link href="/about-logo" className="flex items-center gap-1" style={{ color: 'var(--white)', fontWeight: '500' }}>
                <span>{heroContent.logoTooltip}</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="container-narrow">
        <nav className="flex flex-wrap gap-4 text-sm">
          {navigationContent.mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover-underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </section>

      <div className="container-narrow">
        <div className="divider"></div>
      </div>

      {/* Timeline */}
      <section className="container-narrow py-8">
        <h2 className="text-sm font-normal mb-6" style={{ color: 'var(--navy)' }}>Timeline</h2>
        
        {timelineData.timeline.map((yearGroup, yearIdx) => (
          <div key={yearGroup.year} className="relative mb-8">
            {/* Vertical connecting line */}
            {yearIdx < timelineData.timeline.length - 1 && (
              <div 
                className="absolute left-0 top-8 bottom-0 w-px" 
                style={{ backgroundColor: 'var(--lighter-gray)' }}
              />
            )}
            
            {/* Year with dot */}
            <div className="relative flex items-center gap-3 mb-3">
              <div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: 'var(--navy)' }}
              />
              <h3 className="text-sm text-muted">{yearGroup.year}</h3>
            </div>
            
            {/* Entries */}
            <div className="space-y-2 pl-5">
              {yearGroup.entries.map((entry, idx) => (
                <div key={idx} className="relative flex items-baseline gap-3 text-sm">
                  {/* Small connector from main line to entry */}
                  <div 
                    className="absolute -left-5 top-2 w-4 h-px" 
                    style={{ backgroundColor: 'var(--lighter-gray)' }}
                  />
                  
                  <span className="text-muted min-w-[2rem] text-xs">{entry.date}</span>
                  <div className="flex-1">
                    {entry.link ? (
                      <Link href={entry.link} className="transition-colors" style={{ color: 'var(--navy)' }}>
                        {entry.title}
                        {entry.link.startsWith('http') && ' ↗'}
                      </Link>
                    ) : (
                      <span style={{ color: 'var(--navy)' }}>{entry.title}</span>
                    )}
                    <span className="text-xs text-muted ml-2">
                      {entry.type === 'milestone' && '•'}
                      {entry.type === 'research' && '○'}
                      {entry.type === 'writing' && '―'}
                      {entry.type === 'project' && '□'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <div className="container-narrow">
        <div className="divider"></div>
      </div>

      {/* Currently */}
      <section className="container-narrow py-8">
        <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>{currentlyContent.title}</h2>
        <div className="space-y-3 text-sm">
          {currentlyContent.activities.map((activity, idx) => (
            <p key={idx}>
              <span className="text-muted">{activity.category}:</span> {activity.description}
            </p>
          ))}
        </div>
      </section>

      <div className="container-narrow">
        <div className="divider"></div>
      </div>

      {/* Recent Writing */}
      <section className="container-narrow py-8">
        <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>{recentWritingContent.title}</h2>
        <div className="space-y-4">
          {recentWritingContent.articles.map((article, idx) => (
            <article key={idx}>
              <Link href={article.link} className="group">
                <h3 className="text-sm font-normal transition-colors" style={{ color: 'var(--navy)' }}>
                  {article.title}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {article.summary}
                </p>
                <p className="text-xs text-muted mt-1">{article.date} · {article.readTime}</p>
              </Link>
            </article>
          ))}
        </div>
        
        <Link href="/blog" className="inline-block mt-4 text-sm hover-underline">
          {recentWritingContent.viewAllText}
        </Link>
      </section>

      <div className="container-narrow">
        <div className="divider"></div>
      </div>

      {/* Contact */}
      <section className="container-narrow py-8 pb-16">
        <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>{contactContent.title}</h2>
        <p className="text-sm text-muted mb-3">
          {contactContent.description}
        </p>
        <Link href="/contact" className="text-sm hover-underline">
          {contactContent.linkText}
        </Link>
      </section>
    </div>
  );
}