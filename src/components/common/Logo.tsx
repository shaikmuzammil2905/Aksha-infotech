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

      {/* Brand Typography Beside Logo (as before) */}
      <div className="flex flex-col select-none leading-none">
        <div className="flex items-baseline tracking-tight">
          <span className={`font-black text-brand-red font-sans tracking-wide ${isSm ? 'text-lg' : isLg ? 'text-2xl' : 'text-xl sm:text-2xl'}`}>
            AKSHA
          </span>
        </div>
        <div className="flex items-center gap-1 my-0.5">
          <span className="h-[1px] bg-sky-400 w-2"></span>
          <span className={`font-bold tracking-wider text-sky-400 uppercase ${isSm ? 'text-[8px]' : 'text-[9.5px] sm:text-[10.5px]'}`}>
            INFOTECH PVT LTD
          </span>
          <span className="h-[1px] bg-sky-400 w-2"></span>
        </div>
        <span className={`font-extrabold tracking-wider text-brand-red uppercase ${isSm ? 'text-[6.5px]' : 'text-[7.5px] sm:text-[8.5px]'}`}>
          BEST GUIDE FOR RIGHT FUTURE
        </span>
      </div>
    </Link>
  );
};

