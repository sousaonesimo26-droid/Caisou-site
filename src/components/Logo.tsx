import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  variant?: 'full' | 'compact' | 'symbol-only' | 'white';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = true,
  variant = 'full',
}) => {
  const isWhite = variant === 'white';

  // Sizing scales
  const dimensions = {
    sm: { symbolSize: 34, textScale: 'text-lg', subScale: 'text-[9px]', tagScale: 'text-[7px]' },
    md: { symbolSize: 48, textScale: 'text-2xl', subScale: 'text-[11px]', tagScale: 'text-[9px]' },
    lg: { symbolSize: 64, textScale: 'text-3xl', subScale: 'text-[13px]', tagScale: 'text-[10.5px]' },
    xl: { symbolSize: 84, textScale: 'text-4xl', subScale: 'text-sm', tagScale: 'text-xs' },
  }[size];

  const SymbolSvg = (
    <svg
      viewBox="0 0 200 200"
      width={dimensions.symbolSize}
      height={dimensions.symbolSize}
      className="shrink-0 transition-transform duration-300 group-hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="caisouBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0B408C" />
          <stop offset="100%" stopColor="#1E6FD9" />
        </linearGradient>
        <linearGradient id="caisouGreenGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F6D38" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="caisouCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Outer Circle Swooshes */}
      {/* Top/Left Blue Arc */}
      <path
        d="M 100 12 A 88 88 0 0 1 188 100"
        stroke="url(#caisouBlueGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 24 100 A 76 76 0 0 1 100 24"
        stroke="url(#caisouBlueGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bottom/Right Green Arc */}
      <path
        d="M 188 100 A 88 88 0 0 1 100 188"
        stroke="url(#caisouGreenGrad)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 100 176 A 76 76 0 0 1 24 100"
        stroke="url(#caisouGreenGrad)"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Floating IT / Tech Cubes (Top Right) */}
      <rect x="146" y="24" width="13" height="13" rx="2" fill="#0B408C" />
      <rect x="164" y="38" width="12" height="12" rx="2" fill="#1E6FD9" />
      <rect x="132" y="36" width="11" height="11" rx="2" fill="#22C55E" />
      <rect x="150" y="48" width="12" height="12" rx="2" fill="#15803D" />

      {/* Microscope (Left/Center in Blue) */}
      <g transform="translate(42, 28) scale(0.62)">
        {/* Eyepiece / Tube */}
        <path
          d="M 85 10 L 68 36 L 54 27 L 71 2 Z"
          fill="#0B408C"
        />
        {/* Main Body Tube & Objective Lens */}
        <path
          d="M 68 36 L 38 82 L 46 87 L 76 41 Z"
          fill="#0F52BA"
        />
        {/* Objective revolving nosepiece & lens */}
        <circle cx="36" cy="85" r="7" fill="#0B408C" />
        <rect x="26" y="87" width="8" height="14" rx="2" transform="rotate(-33 26 87)" fill="#1E6FD9" />
        
        {/* Curved Arm */}
        <path
          d="M 68 45 C 92 65 92 105 76 130 C 70 140 58 145 42 145 L 36 133 C 50 133 60 126 66 118 C 76 100 75 72 58 56 Z"
          fill="#0B408C"
        />
        {/* Stage & Base */}
        <rect x="12" y="112" width="38" height="7" rx="3" fill="#0F52BA" />
        <path d="M 18 145 L 68 145 L 68 156 L 14 156 Z" fill="#0B408C" />
      </g>

      {/* Laboratory Flask / Erlenmeyer (Right in Blue with Green Liquid) */}
      <g transform="translate(102, 58) scale(0.58)">
        {/* Flask Glass Outline */}
        <path
          d="M 32 10 L 48 10 L 48 40 L 72 90 C 76 98 70 106 58 106 L 22 106 C 10 106 4 98 8 90 L 32 40 Z"
          stroke="#0B408C"
          strokeWidth="6"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Flask Neck Rim */}
        <rect x="27" y="4" width="26" height="7" rx="3" fill="#0B408C" />
        {/* Green Solution Level inside Flask */}
        <path
          d="M 21 68 Q 40 62 59 68 L 68 94 C 70 98 67 101 60 101 L 20 101 C 13 101 10 98 12 94 Z"
          fill="url(#caisouGreenGrad)"
          opacity="0.9"
        />
        {/* Bubbles in flask */}
        <circle cx="34" cy="80" r="3" fill="#FFFFFF" opacity="0.8" />
        <circle cx="48" cy="86" r="2.5" fill="#FFFFFF" opacity="0.8" />
      </g>

      {/* Electrocardiogram / Heartbeat Vital Pulse (Horizontal Green Line) */}
      <path
        d="M 15 106 L 68 106 L 76 86 L 86 138 L 98 52 L 110 148 L 120 92 L 128 106 L 185 106"
        stroke="url(#caisouGreenGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );

  if (variant === 'symbol-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {SymbolSvg}
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {SymbolSvg}

      <div className="flex flex-col justify-center">
        {/* CAISOU Wordmark */}
        <div className="flex items-center">
          <span
            className={`font-extrabold tracking-wider leading-none ${dimensions.textScale} ${
              isWhite ? 'text-white' : 'text-[#0a3875]'
            }`}
          >
            C<span className="relative inline-block text-inherit">
              A
              {/* Green triangle accent inside the A */}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[5px] border-b-emerald-600"></span>
            </span>ISOU
          </span>
        </div>

        {/* COMÉRCIO E SERVIÇOS */}
        <span
          className={`font-bold tracking-[0.22em] uppercase leading-tight ${dimensions.subScale} ${
            isWhite ? 'text-emerald-400' : 'text-[#16783d]'
          }`}
        >
          COMÉRCIO E SERVIÇOS
        </span>

        {/* Tagline */}
        {showTagline && (
          <span
            className={`font-medium tracking-normal mt-0.5 uppercase leading-none ${dimensions.tagScale} ${
              isWhite ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            SOLUÇÕES QUE TRANSFORMAM, QUALIDADE QUE FAZ A DIFERENÇA.
          </span>
        )}
      </div>
    </div>
  );
};
