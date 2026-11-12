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

  const imgHeight = isSm ? 'h-10 sm:h-11' : isLg ? 'h-16 sm:h-20' : 'h-12 sm:h-14 md:h-[58px]';

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 active:scale-95 ${className}`}>
      {/* Transparent Gold & Silver 'Aa' Emblem (Zero Black Patch Work) */}
      <img
        src="/images/logo.png"
        alt="Aksha Infotech Pvt Ltd Logo"
        className={`${imgHeight} w-auto object-contain drop-shadow-[0_0_12px_rgba(251,191,36,0.35)] transition-transform duration-300 group-hover:scale-105 flex-shrink-0`}
      />

      {/* Brand Typography Beside Logo */}
      <div className="flex flex-col select-none leading-none">
        <div className="flex items-baseline gap-1.5 tracking-tight">
          <span className={`font-black text-white font-sans tracking-wide drop-shadow ${isSm ? 'text-base sm:text-lg' : isLg ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl md:text-2xl'}`}>
            Aksha Infotech
          </span>
          <span className={`font-bold text-amber-400 tracking-wide ${isSm ? 'text-[10px]' : 'text-xs sm:text-sm'}`}>
            Pvt Ltd
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] bg-amber-400/70 w-2.5 sm:w-3.5"></span>
          <span className={`font-semibold italic tracking-wide text-slate-200 ${isSm ? 'text-[9px]' : 'text-[10px] sm:text-xs'}`}>
            Best guide for bright future
          </span>
          <span className="h-[1px] bg-amber-400/70 w-2.5 sm:w-3.5"></span>
        </div>
      </div>
    </Link>
  );
};

