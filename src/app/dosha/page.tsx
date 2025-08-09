'use client';

import { useState } from 'react';
import Link from 'next/link';

// Dosha quiz questions based on Ayurvedic principles
const questions = [
  {
    id: 1,
    category: "Physical Build",
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin, light, delicate build with prominent joints", dosha: "vata", value: 3 },
      { text: "Medium, athletic build with good muscle definition", dosha: "pitta", value: 3 },
      { text: "Large, solid build with tendency to gain weight easily", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 2,
    category: "Physical Build",
    question: "How would you describe your weight?",
    options: [
      { text: "Low weight, hard to gain", dosha: "vata", value: 3 },
      { text: "Moderate weight, easy to gain or lose", dosha: "pitta", value: 3 },
      { text: "Heavy, easy to gain, hard to lose", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 3,
    category: "Skin",
    question: "What is your skin type?",
    options: [
      { text: "Dry, rough, thin, cool to touch", dosha: "vata", value: 3 },
      { text: "Warm, oily in T-zone, prone to redness or inflammation", dosha: "pitta", value: 3 },
      { text: "Thick, oily, smooth, cool to touch", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 4,
    category: "Hair",
    question: "How would you describe your hair?",
    options: [
      { text: "Dry, brittle, thin, tends to be frizzy", dosha: "vata", value: 3 },
      { text: "Fine, soft, tendency toward early graying or thinning", dosha: "pitta", value: 3 },
      { text: "Thick, oily, wavy, lustrous", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 5,
    category: "Appetite",
    question: "How would you describe your appetite?",
    options: [
      { text: "Variable, sometimes forget to eat", dosha: "vata", value: 3 },
      { text: "Strong, get irritable if I miss a meal", dosha: "pitta", value: 3 },
      { text: "Steady but low, can easily skip meals", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 6,
    category: "Digestion",
    question: "How is your digestion?",
    options: [
      { text: "Irregular, tendency toward gas and bloating", dosha: "vata", value: 3 },
      { text: "Strong, quick metabolism, tendency toward heartburn", dosha: "pitta", value: 3 },
      { text: "Slow but steady, occasional heaviness after eating", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 7,
    category: "Sleep",
    question: "How would you describe your sleep patterns?",
    options: [
      { text: "Light, interrupted, difficulty falling asleep", dosha: "vata", value: 3 },
      { text: "Moderate, sound sleep, 6-8 hours is enough", dosha: "pitta", value: 3 },
      { text: "Deep, heavy, love to sleep, hard to wake up", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 8,
    category: "Temperature",
    question: "How do you respond to temperature?",
    options: [
      { text: "Dislike cold, prefer warm weather, cold hands and feet", dosha: "vata", value: 3 },
      { text: "Prefer cool weather, warm body temperature, dislike heat", dosha: "pitta", value: 3 },
      { text: "Adaptable but prefer warm and dry, dislike cold and damp", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 9,
    category: "Mind",
    question: "How would you describe your mind?",
    options: [
      { text: "Creative, imaginative, quick to learn but quick to forget", dosha: "vata", value: 3 },
      { text: "Sharp, focused, good comprehension and memory", dosha: "pitta", value: 3 },
      { text: "Calm, steady, slow to learn but excellent long-term memory", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 10,
    category: "Emotions",
    question: "Under stress, you tend to become:",
    options: [
      { text: "Anxious, worried, overwhelmed", dosha: "vata", value: 3 },
      { text: "Irritable, angry, frustrated", dosha: "pitta", value: 3 },
      { text: "Withdrawn, resistant to change, depressed", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 11,
    category: "Activity",
    question: "Your activity level is:",
    options: [
      { text: "Very active, restless, like to stay busy", dosha: "vata", value: 3 },
      { text: "Moderate, purposeful, competitive", dosha: "pitta", value: 3 },
      { text: "Steady, slow-paced, prefer sedentary activities", dosha: "kapha", value: 3 }
    ]
  },
  {
    id: 12,
    category: "Speech",
    question: "Your speech pattern is:",
    options: [
      { text: "Fast, talkative, may jump between topics", dosha: "vata", value: 3 },
      { text: "Clear, sharp, convincing, articulate", dosha: "pitta", value: 3 },
      { text: "Slow, steady, melodious, thoughtful", dosha: "kapha", value: 3 }
    ]
  }
];

const doshaInfo = {
  vata: {
    name: "Vata",
    elements: "Air & Space",
    qualities: "Light, Cold, Dry, Rough, Mobile",
    description: "Vata types are creative, energetic, and quick-thinking. They tend to be thin with dry skin and are prone to anxiety and irregular digestion.",
    balance: [
      "Maintain regular daily routines",
      "Stay warm and avoid cold, dry weather",
      "Eat warm, cooked, nourishing foods",
      "Practice calming activities like meditation",
      "Get adequate rest and avoid overstimulation"
    ],
    foods: {
      favor: ["Warm soups", "Cooked grains", "Root vegetables", "Nuts and seeds", "Warming spices"],
      avoid: ["Cold, raw foods", "Dry crackers", "Carbonated drinks", "Caffeine", "Beans"]
    }
  },
  pitta: {
    name: "Pitta",
    elements: "Fire & Water",
    qualities: "Hot, Sharp, Light, Oily, Liquid",
    description: "Pitta types are intelligent, focused, and ambitious. They have medium builds, warm body temperature, and can be prone to inflammation and irritability.",
    balance: [
      "Keep cool, avoid excessive heat",
      "Eat cooling, refreshing foods",
      "Avoid excessive competition",
      "Practice moderation in all activities",
      "Spend time in nature, especially near water"
    ],
    foods: {
      favor: ["Cooling foods", "Sweet fruits", "Green vegetables", "Coconut", "Mint and cilantro"],
      avoid: ["Spicy foods", "Sour foods", "Alcohol", "Red meat", "Fried foods"]
    }
  },
  kapha: {
    name: "Kapha",
    elements: "Earth & Water",
    qualities: "Heavy, Cold, Oily, Smooth, Stable",
    description: "Kapha types are calm, steady, and nurturing. They have solid builds, smooth skin, and can be prone to weight gain and sluggishness.",
    balance: [
      "Stay active and exercise regularly",
      "Wake up early and avoid daytime naps",
      "Eat light, warm, spiced foods",
      "Seek variety and new experiences",
      "Avoid cold, damp environments"
    ],
    foods: {
      favor: ["Light, warm foods", "Spices", "Leafy greens", "Legumes", "Honey"],
      avoid: ["Heavy, oily foods", "Dairy products", "Sweet foods", "Cold foods", "Excessive salt"]
    }
  }
};

export default function DoshaCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: number}>({ vata: 0, pitta: 0, kapha: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (dosha: string, value: number) => {
    const newAnswers = { ...answers };
    newAnswers[dosha] += value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculatePercentages = () => {
    const total = answers.vata + answers.pitta + answers.kapha;
    if (total === 0) return { vata: 0, pitta: 0, kapha: 0 };
    
    return {
      vata: Math.round((answers.vata / total) * 100),
      pitta: Math.round((answers.pitta / total) * 100),
      kapha: Math.round((answers.kapha / total) * 100)
    };
  };

  const getPrimaryDosha = () => {
    const percentages = calculatePercentages();
    const doshas = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    return doshas[0][0] as keyof typeof doshaInfo;
  };

  const getDoshaType = () => {
    const percentages = calculatePercentages();
    const doshas = Object.entries(percentages).sort((a, b) => b[1] - a[1]);
    
    // Check if dual dosha (two doshas within 10% of each other)
    if (Math.abs(doshas[0][1] - doshas[1][1]) <= 10) {
      return `${doshas[0][0]}-${doshas[1][0]}`;
    }
    
    // Check if tridoshic (all three within 10% of each other)
    if (Math.abs(doshas[0][1] - doshas[2][1]) <= 15) {
      return 'tridoshic';
    }
    
    return doshas[0][0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({ vata: 0, pitta: 0, kapha: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const percentages = calculatePercentages();
    const primaryDosha = getPrimaryDosha();
    const doshaType = getDoshaType();
    const info = doshaInfo[primaryDosha];

    return (
      <div className="container-narrow py-12">
        <h1 className="text-2xl font-normal mb-8" style={{ color: 'var(--navy)' }}>Your Dosha Results</h1>
        
        {/* Dosha Percentages */}
        <div className="mb-12">
          <h2 className="text-lg font-normal mb-6" style={{ color: 'var(--navy)' }}>
            Your Constitution: {doshaType === 'tridoshic' ? 'Tridoshic (Balanced)' : doshaType.charAt(0).toUpperCase() + doshaType.slice(1)}
          </h2>
          
          <div className="space-y-4 mb-8">
            {Object.entries(percentages).map(([dosha, percentage]) => (
              <div key={dosha}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm capitalize">{dosha}</span>
                  <span className="text-sm text-muted">{percentage}%</span>
                </div>
                <div className="w-full h-1" style={{ backgroundColor: 'var(--lighter-gray)' }}>
                  <div 
                    className="h-1 transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: 'var(--navy)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Primary Dosha Information */}
          <div className="border-t pt-6" style={{ borderColor: 'var(--lighter-gray)' }}>
            <h3 className="text-lg font-normal mb-3" style={{ color: 'var(--navy)' }}>
              Primary Dosha: {info.name}
            </h3>
            <p className="text-sm text-muted mb-4">
              <span className="text-black">Elements:</span> {info.elements} · <span className="text-black">Qualities:</span> {info.qualities}
            </p>
            <p className="text-sm leading-relaxed mb-6">{info.description}</p>
          </div>
        </div>

        {/* Recommendations */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Balance Tips */}
          <div>
            <h3 className="text-base font-normal mb-4">Tips to Balance Your Dosha</h3>
            <ul className="space-y-2">
              {info.balance.map((tip, index) => (
                <li key={index} className="text-sm flex items-start">
                  <span className="mr-2">·</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dietary Guidelines */}
          <div>
            <h3 className="text-base font-normal mb-4">Dietary Guidelines</h3>
            <div className="mb-4">
              <h4 className="text-sm font-normal mb-2">Foods to Favor:</h4>
              <ul className="text-sm text-muted space-y-1">
                {info.foods.favor.map((food, index) => (
                  <li key={index}>· {food}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-normal mb-2">Foods to Minimize:</h4>
              <ul className="text-sm text-muted space-y-1">
                {info.foods.avoid.map((food, index) => (
                  <li key={index}>· {food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={resetQuiz}
            className="px-4 py-2 text-sm rounded-lg transition-all"
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
            Retake Quiz
          </button>
          <Link
            href="/blog"
            className="px-6 py-2 text-sm hover:opacity-50 transition-opacity inline-block"
          >
            Read More About Ayurveda →
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 border rounded" style={{ borderColor: 'var(--lighter-gray)', backgroundColor: 'var(--off-white)' }}>
          <p className="text-xs text-muted">
            <span className="text-black">Disclaimer:</span> This quiz provides general information based on Ayurvedic principles. 
            It is not a substitute for professional medical advice. For personalized health guidance, 
            please consult with a qualified Ayurvedic practitioner or healthcare provider.
          </p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container-narrow py-12">
      <h1 className="text-2xl font-normal mb-8" style={{ color: 'var(--navy)' }}>Discover Your Dosha</h1>
      
      <div className="mb-8">
        <p className="text-sm text-muted mb-6">
          In Ayurveda, understanding your dosha (mind-body type) is key to optimizing your health and well-being. 
          Answer these questions honestly based on your lifelong tendencies, not temporary states.
        </p>
        
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full h-1" style={{ backgroundColor: 'var(--lighter-gray)' }}>
            <div 
              className="h-1 transition-all duration-300"
              style={{ 
                width: `${progress}%`,
                backgroundColor: 'var(--navy)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="py-8">
        <div className="mb-4">
          <span className="text-xs text-muted uppercase tracking-wide">
            {question.category}
          </span>
        </div>
        
        <h2 className="text-lg font-normal mb-6" style={{ color: 'var(--navy)' }}>
          {question.question}
        </h2>
        
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.dosha, option.value)}
              className="w-full text-left p-4 text-sm rounded-lg transition-all"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(30, 58, 95, 0.2)',
                color: 'var(--navy)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(30, 58, 95, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(30, 58, 95, 0.2)';
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      {currentQuestion > 0 && (
        <div className="mt-6">
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-sm hover:opacity-50 transition-opacity"
          >
            ← Previous Question
          </button>
        </div>
      )}
    </div>
  );
}