import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group transition-transform duration-200 active:scale-95 ${className}`}>
      {/* Dynamic Stylized Icon */}
      <div className={`relative flex items-center justify-center flex-shrink-0 ${isSm ? 'w-8 h-8' : isLg ? 'w-12 h-12' : 'w-10 h-10'}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="akshaRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4f" />
              <stop offset="100%" stopColor="#d91b24" />
            </linearGradient>
            <linearGradient id="akshaBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          {/* Left Red Peak Ribbon */}
          <path
            d="M15 82 L42 22 C44 17 48 17 50 22 L65 55 L54 58 L46 38 L25 82 Z"
            fill="url(#akshaRedGrad)"
          />
          {/* Right Blue Peak Ribbon with Interlocking */}
          <path
            d="M38 82 L58 40 C60 36 65 36 67 40 L88 82 L76 82 L63 56 L51 82 Z"
            fill="url(#akshaBlueGrad)"
          />
          {/* Globe Outline on the right */}
          <circle cx="82" cy="26" r="14" stroke="#0284c7" strokeWidth="2.5" fill="#f0f9ff" fillOpacity="0.8" />
          <path d="M68 26 H96" stroke="#0284c7" strokeWidth="2" strokeDasharray="2 2" />
          <path d="M82 12 V40" stroke="#0284c7" strokeWidth="2" strokeDasharray="2 2" />
          <ellipse cx="82" cy="26" rx="7" ry="13" stroke="#0284c7" strokeWidth="1.8" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col select-none leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className={`font-black text-brand-red font-sans tracking-wide ${isSm ? 'text-lg' : isLg ? 'text-2xl' : 'text-xl'}`}>
            AKSHA
          </span>
        </div>
        <div className="flex items-center gap-1 my-0.5">
          <span className="h-[1px] bg-sky-300 w-2"></span>
          <span className={`font-bold tracking-wider text-sky-800 uppercase ${isSm ? 'text-[8px]' : 'text-[9.5px]'}`}>
            INFOTECH PVT LTD
          </span>
          <span className="h-[1px] bg-sky-300 w-2"></span>
        </div>
        <span className={`font-extrabold tracking-wider text-[#d91b24] uppercase ${isSm ? 'text-[6.5px]' : 'text-[7.5px]'}`}>
          BEST GUIDE FOR RIGHT FUTURE
        </span>
      </div>
    </Link>
  );
};

