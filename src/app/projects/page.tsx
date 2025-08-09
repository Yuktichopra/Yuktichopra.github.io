import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: "Thinking About Thinking",
      description: "Nonprofit bridging cutting-edge neuroscience and public understanding through events and accessible content.",
      date: "Ongoing",
      cta: "Learn More",
      href: "#",
    },
    {
      title: "BCI Investment Watch",
      description: "Analysis series tracking investments and trends in Brain-Computer Interface technology.",
      date: "2024-Present",
      cta: "Read Analysis",
      href: "/blog",
    },
    {
      title: "Neuro-Curious Q&A",
      description: "Content series answering questions about the brain, memory, and cognition in accessible formats.",
      date: "2023-Present",
      cta: "Explore Q&A",
      href: "/blog",
    },
    {
      title: "Cross-Disciplinary Insights",
      description: "Exploring intersections of neuroscience with economics, AI, and philosophy.",
      date: "2023-Present",
      cta: "Discover",
      href: "/blog",
    },
  ];

  return (
    <div className="container-narrow py-12">
      <h1 className="text-lg font-normal mb-8" style={{ color: 'var(--navy)' }}>Projects</h1>

      <section className="mb-8">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-sm font-normal mb-1" style={{ color: 'var(--navy)' }}>
                {project.title}
              </h3>
              <p className="text-xs text-muted mb-2">{project.date}</p>
              <p className="text-sm text-muted mb-2">{project.description}</p>
              <Link href={project.href} className="text-sm hover-underline">
                {project.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section id="thinking-about-thinking">
        <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>
          Thinking About Thinking Nonprofit
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          As a core commitment to public engagement, I'm deeply involved with "Thinking About Thinking" nonprofit. 
          Our goal is to demystify complex scientific concepts, particularly in neuroscience, and foster a 
          community of curious minds.
        </p>
        <p className="text-sm leading-relaxed mb-4">
          We regularly host events, workshops, and produce accessible content to share the latest insights 
          in cognitive science, memory, and longevity, making science relatable and impactful for everyone.
        </p>
        <a 
          href="https://thinkingaboutthinking.org" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm hover-underline"
        >
          Visit Website ↗
        </a>
      </section>
    </div>
  );
}