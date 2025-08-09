'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useState } from 'react';

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <header className="border-b" style={{ borderColor: '#e0e0e0', backgroundColor: '#ffffff' }}>
      <div className="container-narrow py-4 flex items-center justify-between">
        {/* YC initials with logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm font-normal" style={{ color: 'var(--navy)' }}>
            {siteConfig.shortName}
          </Link>
          
          {/* Small logo with tooltip */}
          <div className="group relative">
            <Link href="/about-logo" className="block">
              <Image 
                src="/images/logo.png" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="cursor-pointer transition-transform hover:scale-110"
                priority
              />
            </Link>
            
            {/* Tooltip on hover - same style as homepage */}
            <div className="absolute left-0 top-8 opacity-0 group-hover:opacity-100 transition-opacity z-10 px-3 py-2 text-xs rounded-lg shadow-lg whitespace-nowrap"
                 style={{ 
                   backgroundColor: 'rgba(30, 58, 95, 0.7)',
                   backdropFilter: 'blur(8px)',
                   WebkitBackdropFilter: 'blur(8px)',
                   border: '1px solid rgba(30, 58, 95, 0.3)',
                   color: 'var(--white)'
                 }}>
              <Link href="/about-logo" className="flex items-center gap-1" style={{ color: 'var(--white)', fontWeight: '500' }}>
                <span>What's this?</span>
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}