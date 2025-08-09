export default function NeuralDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Neural network visualization */}
      <defs>
        <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Neurons */}
      <circle cx="100" cy="100" r="8" fill="url(#neuralGradient)" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="100" r="8" fill="url(#neuralGradient)" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="200" cy="200" r="10" fill="url(#neuralGradient)" filter="url(#glow)">
        <animate attributeName="r" values="10;12;10" dur="3s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="300" r="8" fill="url(#neuralGradient)" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" begin="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="300" cy="300" r="8" fill="url(#neuralGradient)" filter="url(#glow)">
        <animate attributeName="r" values="8;10;8" dur="3s" begin="2s" repeatCount="indefinite" />
      </circle>

      {/* Synaptic connections */}
      <path d="M100 100 L200 200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5">
        <animate attributeName="stroke-width" values="1;2;1" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M300 100 L200 200" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5">
        <animate attributeName="stroke-width" values="1;2;1" dur="4s" begin="0.5s" repeatCount="indefinite" />
      </path>
      <path d="M200 200 L100 300" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5">
        <animate attributeName="stroke-width" values="1;2;1" dur="4s" begin="1s" repeatCount="indefinite" />
      </path>
      <path d="M200 200 L300 300" stroke="url(#neuralGradient)" strokeWidth="1" opacity="0.5">
        <animate attributeName="stroke-width" values="1;2;1" dur="4s" begin="1.5s" repeatCount="indefinite" />
      </path>
      <path d="M100 100 L300 300" stroke="url(#neuralGradient)" strokeWidth="0.5" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
      </path>
      <path d="M300 100 L100 300" stroke="url(#neuralGradient)" strokeWidth="0.5" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" begin="2.5s" repeatCount="indefinite" />
      </path>

      {/* Signal pulses */}
      <circle r="3" fill="#06B6D4" filter="url(#glow)">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath href="#path1" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite" />
      </circle>
      
      <path id="path1" d="M100 100 L200 200 L300 300" fill="none" />
    </svg>
  );
}