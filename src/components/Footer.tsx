import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: '#e0e0e0', backgroundColor: '#ffffff' }}>
      <div className="container-narrow py-8">
        <div className="flex justify-between items-start text-xs">
          <div>
            <p style={{ color: 'var(--navy)' }}>&copy; {new Date().getFullYear()} {siteConfig.author.name}</p>
            <p className="mt-1 text-muted">{siteConfig.author.title}</p>
          </div>
          <nav className="flex gap-4">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--navy)' }}>
              LinkedIn
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--navy)' }}>
              GitHub
            </a>
            <a href={siteConfig.twitter} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'var(--navy)' }}>
              Twitter
            </a>
            <a href={`mailto:${siteConfig.author.email}`} className="transition-colors" style={{ color: 'var(--navy)' }}>
              Email
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}