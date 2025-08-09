import Link from 'next/link';

export default function ConsultingPage() {
  const packages = [
    {
      name: "Science Communication Starter",
      description: "Ideal for researchers or organizations looking to begin their science communication journey.",
      deliverables: [
        "1x Script for short video (e.g., 3-5 min)",
        "3x Social media carousel outlines",
        "1x Newsletter content draft (up to 500 words)",
        "1-hour consultation call"
      ],
      price: "Custom Quote",
    },
    {
      name: "Research Translation & Strategy",
      description: "For academics or companies needing to translate complex research into clear, compelling narratives.",
      deliverables: [
        "Review of 1-2 research papers/reports",
        "Strategic recommendations for public engagement",
        "Editorial calendar outline (3 months)",
        "2-hour workshop on research translation principles"
      ],
      price: "Custom Quote",
    },
    {
      name: "Expert Talks & Workshops",
      description: "Engage your audience with insightful talks or interactive workshops on cognitive science and related fields.",
      deliverables: [
        "Customized presentation (45-60 min)",
        "Interactive Q&A session",
        "Workshop materials (if applicable)",
        "Topics: Memory, Attention, AI & Neurotechnology, Cognitive Biases"
      ],
      price: "Custom Quote",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Consulting Services</h1>

      <section className="mb-10 text-center">
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          Leveraging my expertise in computational cognitive neuroscience and passion for clear communication, I offer specialized consulting services to help individuals and organizations effectively convey complex scientific ideas.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          Whether you need engaging content, strategic guidance, or an expert speaker, I can help you connect with your audience.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-slate-800 mb-6 text-center">My Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{pkg.name}</h3>
              <p className="text-slate-600 mb-4 flex-grow">{pkg.description}</p>
              <ul className="list-disc list-inside text-slate-700 mb-6 space-y-1">
                {pkg.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-auto text-center">
                <p className="text-lg font-bold text-cyan-600 mb-4">{pkg.price}</p>
                <Link href="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors inline-block">
                  Work with me
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 text-center">
        <p className="text-lg text-slate-700 leading-relaxed">
          Ready to elevate your science communication? Let's connect to discuss your specific needs and how I can help.
        </p>
        <Link href="/contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors inline-block mt-6">
          Contact Me
        </Link>
      </section>
    </div>
  );
}
