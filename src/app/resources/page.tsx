'use client';

import Link from 'next/link';
import resources from '@/content/resources/links.json';
import { useState } from 'react';

interface ResourceLink {
  title: string;
  oneLiner: string;
  url: string;
}

interface Resources {
  [key: string]: ResourceLink[];
}

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = Object.entries(resources as Resources).reduce<Resources>((acc, [category, links]) => {
    const filteredLinks = links.filter((link: ResourceLink) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.oneLiner.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredLinks.length > 0) {
      acc[category] = filteredLinks;
    }
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Curated Resources</h1>

      <section className="mb-10 text-center">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          A collection of valuable resources, from leading science communicators and behavioral scientists to academic templates and research examples, curated to support your journey.
        </p>
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full max-w-md px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 mb-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      {Object.keys(filteredResources).length === 0 && (
        <p className="text-center text-slate-600 text-lg">No resources found matching your search.</p>
      )}

      {Object.entries(filteredResources).map(([category, links]) => (
        <section key={category} className="mb-10">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">{category}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(links as ResourceLink[]).map((link, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{link.title}</h3>
                <p className="text-slate-600 mb-3">{link.oneLiner}</p>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline font-medium inline-flex items-center">
                  Visit Site &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
