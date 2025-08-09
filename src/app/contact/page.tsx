'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    alert('Email address copied to clipboard!');
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Get in Touch</h1>

      <section className="mb-10">
        <p className="text-lg text-slate-700 leading-relaxed mb-6 text-center">
          Have a question, a collaboration idea, or just want to say hello? Feel free to reach out!
        </p>

        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-slate-700 text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-slate-700 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-cyan-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="text-center">
              <Link
                href={`mailto:${siteConfig.author.email}?subject=Website Contact&body=Hi Yukti,\n\n[Your message here]\n\nBest,\n[Your Name]`}
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors inline-block"
              >
                Send Email
              </Link>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-4 border border-cyan-600 text-cyan-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-colors"
              >
                Copy Email
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="p-10 rounded-lg text-center max-w-2xl mx-auto" style={{ backgroundColor: 'var(--off-white)' }}>
        <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--navy)' }}>Join the Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with insights on neuroscience, memory, and longevity.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4" action="/api/subscribe" method="POST">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full sm:w-auto flex-grow px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />
          <button
            type="submit"
            className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}