import Link from 'next/link';
import Image from 'next/image';

export default function AboutLogoPage() {
  return (
    <div className="container-narrow py-12">
      <div className="max-w-xl mx-auto">
        {/* Logo Display */}
        <div className="flex justify-center mb-8">
          <div style={{ padding: '20px', backgroundColor: 'var(--off-white)', borderRadius: '12px' }}>
            <Image 
              src="/images/logo.png" 
              alt="Logo - Brain and Infinity Symbol" 
              width={120} 
              height={120}
              priority
            />
          </div>
        </div>

        <h1 className="text-lg font-normal mb-8 text-center" style={{ color: 'var(--navy)' }}>
          The Philosophy Behind the Symbol
        </h1>

        <section className="space-y-6 text-sm leading-relaxed">
          <p>
            This logo represents the infinite loop of consciousness—where the brain seamlessly flows into 
            the infinity symbol, creating a unified form that embodies the endless interplay between mind and experience.
          </p>

          <p>
            My fascination with the brain stems from a fundamental curiosity: everything we perceive, 
            think, and feel emerges from this three-pound universe within us. By merging the brain with 
            the infinity symbol, the logo captures a profound truth—that all that exists in the brain is 
            an outcome of experiences gathered by our physical form, and vice versa. It's an endless 
            feedback loop where consciousness shapes reality and reality shapes consciousness, neither 
            beginning nor ending, but perpetually flowing into one another.
          </p>

          <p>
            This symbol also reflects my interest in longevity and the timeless wisdom of Ayurveda. 
            Through my practice and deep dives into traditional medicine, I've discovered something 
            remarkable: nature provides both the ailments and their remedies in perfect balance. 
            Every infection and its cure coexist in the same ecosystem—a beautiful paradox that 
            mirrors the brain's own dual nature of creating problems and finding solutions.
          </p>

          <p>
            The intersection of neuroscience and ancient wisdom fascinates me. While modern science 
            maps neural pathways and decodes synaptic transmissions, Ayurveda has understood the 
            mind-body connection for millennia. Both paths lead to the same truth: we are infinitely 
            complex beings capable of infinite growth and understanding.
          </p>

          <p className="text-muted">
            This website is a reflection of these intertwining interests—a space where rigorous 
            scientific inquiry meets philosophical musings, where research papers coexist with 
            personal reflections, and where the analytical mind embraces the intuitive soul. 
            Here, you'll find fragments of my journey through neuroscience, glimpses of my 
            exploration into longevity, and echoes of questions that keep me curious.
          </p>

          <p className="italic" style={{ color: 'var(--navy)' }}>
            Welcome to my infinite loop—where every ending is a new beginning, and every 
            question leads to deeper understanding.
          </p>
        </section>

        <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--lighter-gray)' }}>
          <Link href="/" className="text-sm hover-underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}