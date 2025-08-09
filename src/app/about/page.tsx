import Link from 'next/link';
import aboutContent from '@/content/site/about.json';

export default function AboutPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-lg font-normal mb-8">{aboutContent.title}</h1>

      <section className="mb-8">
        <p className="text-sm leading-relaxed mb-4">
          {aboutContent.intro.greeting}
        </p>
        <p className="text-sm leading-relaxed mb-4">
          {aboutContent.intro.description}
        </p>
        {aboutContent.sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-sm font-normal mb-2">{section.title}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {section.content}
            </p>
          </div>
        ))}
      </section>

      <div className="divider"></div>

      <section className="mb-8">
        <h2 className="text-sm font-normal mb-6">Background</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm">PhD Computational Cognitive Neuroscience</h3>
            <p className="text-sm text-muted">Working memory, EEG, computational modeling of cognitive biases</p>
          </div>
          <div>
            <h3 className="text-sm">Engineering</h3>
            <p className="text-sm text-muted">Strong analytical and problem-solving foundation</p>
          </div>
          <div>
            <h3 className="text-sm">Science Communication</h3>
            <p className="text-sm text-muted">Public engagement through Thinking About Thinking nonprofit</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="mb-8">
        <h2 className="text-sm font-normal mb-4">Current Focus</h2>
        <p className="text-sm leading-relaxed mb-3">
          Translating doctoral research into accessible insights, exploring longevity science, 
          and expanding Thinking About Thinking through content and community events.
        </p>
        <p className="text-sm leading-relaxed">
          Seeking collaborations that bridge cutting-edge neuroscience with practical applications 
          for well-being and societal advancement.
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2 className="text-sm font-normal mb-4">Connect</h2>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:yukti@yuktichopra.com" className="hover-underline">
            Email
          </a>
          <a href="https://linkedin.com/in/yukti-chopra" target="_blank" rel="noopener noreferrer" className="hover-underline">
            LinkedIn ↗
          </a>
          <a href="https://github.com/yuktichopra" target="_blank" rel="noopener noreferrer" className="hover-underline">
            GitHub ↗
          </a>
          <Link href="/cv/yukti-chopra.pdf" className="hover-underline">
            Download CV ↓
          </Link>
        </div>
      </section>
    </div>
  );
}