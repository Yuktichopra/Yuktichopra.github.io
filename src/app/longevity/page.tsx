'use client';

import Link from 'next/link';

export default function LongevityPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="text-lg font-normal mb-8" style={{ color: 'var(--navy)' }}>
        Longevity & Wellness
      </h1>
      
      <div className="prose prose-sm max-w-none">
        <p className="text-sm leading-relaxed mb-6">
          I'm deeply fascinated by both longevity science and Ayurveda – two fields that, despite 
          their different origins, share a common goal: optimizing human health and extending healthspan. 
          Here, I explore how cutting-edge longevity research intersects with the ancient wisdom of 
          Ayurvedic medicine to create a holistic approach to wellness.
        </p>
        
        <p className="text-sm leading-relaxed mb-6">
          My interest in these areas stems from a belief that true health optimization requires both 
          understanding the latest scientific breakthroughs and respecting the personalized, time-tested 
          approaches that have sustained human wellness for millennia.
        </p>

        <section className="mb-8">
          <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>
            The Science of Aging
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Longevity research has revealed that aging is not just an inevitable decline, but a 
            complex biological process that can be influenced through lifestyle interventions. 
            Key factors include cellular health, inflammation management, metabolic optimization, 
            and stress resilience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>
            Personalized Wellness Through Ayurveda
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Ayurveda, the 5,000-year-old science of life, offers a personalized approach to health 
            based on your unique constitution or "dosha." Understanding your dosha can help you 
            make informed decisions about diet, exercise, and lifestyle that align with your 
            body's natural tendencies.
          </p>
          
          <div className="my-6 p-6 rounded-lg" style={{ 
            backgroundColor: 'rgba(30, 58, 95, 0.05)',
            border: '1px solid rgba(30, 58, 95, 0.1)'
          }}>
            <h3 className="text-sm font-normal mb-3" style={{ color: 'var(--navy)' }}>
              Discover Your Dosha
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Take our comprehensive Ayurvedic constitution quiz to identify your primary dosha 
              and receive personalized recommendations for optimal health and balance.
            </p>
            <Link
              href="/dosha"
              className="inline-flex items-center px-4 py-2 text-sm rounded-lg transition-all"
              style={{ 
                backgroundColor: 'rgba(30, 58, 95, 0.7)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(30, 58, 95, 0.3)',
                color: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 58, 95, 0.85)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 58, 95, 0.7)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Take the Dosha Quiz →
            </Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>
            Evidence-Based Longevity Practices
          </h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Intermittent Fasting:</strong> Research shows that time-restricted eating 
                can improve metabolic health and potentially extend lifespan.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Sleep Optimization:</strong> Quality sleep is crucial for cellular repair, 
                memory consolidation, and overall longevity.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Stress Management:</strong> Chronic stress accelerates aging. Techniques 
                like meditation and breathwork can help maintain telomere length.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Movement & Exercise:</strong> Regular physical activity, especially combining 
                strength training with cardiovascular exercise, is essential for healthy aging.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <div>
                <strong>Social Connection:</strong> Strong social bonds and community involvement 
                are associated with increased longevity and better health outcomes.
              </div>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-sm font-normal mb-4" style={{ color: 'var(--navy)' }}>
            Latest Research & Articles
          </h2>
          <p className="text-sm leading-relaxed mb-4">
            Explore our latest articles on longevity science, from understanding the hallmarks 
            of aging to practical strategies for healthspan extension.
          </p>
          <Link
            href="/blog"
            className="text-sm hover:opacity-50 transition-opacity inline-block"
            style={{ color: 'var(--navy)' }}
          >
            Browse Longevity Articles →
          </Link>
        </section>

        <div className="mt-12 p-4 border rounded" style={{ 
          borderColor: 'var(--lighter-gray)', 
          backgroundColor: 'var(--off-white)' 
        }}>
          <p className="text-xs text-muted">
            <span className="text-black">Note:</span> The information provided here is for 
            educational purposes only and should not replace professional medical advice. 
            Always consult with healthcare providers before making significant changes to 
            your health routine.
          </p>
        </div>
      </div>
    </div>
  );
}