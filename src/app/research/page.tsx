'use client';

import Link from 'next/link';
import researchContent from '@/content/site/research.json';

export default function ResearchPage() {

  return (
    <div className="container-narrow py-12">
      <h1 className="text-lg font-normal mb-8" style={{ color: 'var(--navy)' }}>{researchContent.title}</h1>

      <section className="mb-8">
        <p className="text-sm leading-relaxed mb-4">
          {researchContent.intro}
        </p>
      </section>

      <div className="divider"></div>

      <section className="mb-8">
        <h2 className="text-sm font-normal mb-6" style={{ color: 'var(--navy)' }}>Key Research Areas</h2>

        <div className="space-y-6">
          {researchContent.areas.map((area, index) => (
            <div key={index}>
              <h3 className="text-sm font-normal mb-2" style={{ color: 'var(--navy)' }}>
                {area.title}
                {area.status && (
                  <span className="ml-2 text-xs text-muted">({area.status})</span>
                )}
              </h3>
              <p className="text-sm text-muted mb-2">
                {area.description}
              </p>
              {area.topics && area.topics.length > 0 && (
                <ul className="text-xs text-muted space-y-1">
                  {area.topics.map((topic, idx) => (
                    <li key={idx}>• {topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section className="mb-8">
        <h2 className="text-sm font-normal mb-6" style={{ color: 'var(--navy)' }}>Publications</h2>
        
        <div className="space-y-4">
          {researchContent.publications.papers.map((pub, index) => (
            <div key={index} className="p-4 border rounded" style={{ borderColor: 'var(--lighter-gray)', backgroundColor: 'var(--white)' }}>
              <h3 className="text-sm font-normal mb-1" style={{ color: 'var(--navy)' }}>
                {pub.title}
              </h3>
              <p className="text-xs text-muted mb-1">
                {pub.authors}
              </p>
              <p className="text-xs text-muted">
                <span style={{ fontStyle: 'italic' }}>{pub.journal}</span>, {pub.year}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-4">
          <a 
            href="https://scholar.google.com/citations?user=2WxLnSQAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-sm hover-underline"
            style={{ color: 'var(--navy)' }}
          >
            View all on Google Scholar →
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>Current Projects</h2>
        <ul className="space-y-2 text-sm">
          <li className="text-muted">
            • Investigating the neural mechanisms of working memory consolidation using high-density EEG
          </li>
          <li className="text-muted">
            • Developing computational models to predict individual differences in cognitive performance
          </li>
          <li className="text-muted">
            • Exploring the relationship between attention and memory encoding in naturalistic tasks
          </li>
        </ul>
      </section>
    </div>
  );
}