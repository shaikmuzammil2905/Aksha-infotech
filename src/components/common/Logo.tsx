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

  const imgSize = isSm ? 'w-10 h-10' : isLg ? 'w-14 h-14' : 'w-11 h-11';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group transition-transform duration-200 active:scale-95 ${className}`}>
      {/* Left Side: Neon 'Aa' Emblem from image copy 22.png */}
      <div className={`relative flex-shrink-0 overflow-hidden rounded-xl bg-[#030914] border border-sky-400/40 shadow-lg group-hover:shadow-[0_0_18px_rgba(56,189,248,0.55)] transition-all ${imgSize}`}>
        <img
          src="/images/logo.png"
          alt="AKSHA Infotech Pvt Ltd Emblem"
          className="w-full h-full object-cover object-[50%_18%] scale-[1.38] transition-transform duration-300 group-hover:scale-[1.45]"
        />
      </div>

      {/* Right Side (Beside Logo): Content from below the logo in image copy 22.png */}
      <div className="flex flex-col select-none leading-none">
        <div className="flex items-baseline gap-1.5 tracking-tight">
          <span className={`font-black text-white font-sans tracking-wide drop-shadow ${isSm ? 'text-sm sm:text-base' : isLg ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}>
            Aksha Infotech
          </span>
          <span className={`font-bold text-sky-400 tracking-wide ${isSm ? 'text-[10px]' : 'text-xs'}`}>
            Pvt Ltd
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span className="h-[1px] bg-sky-400/70 w-2.5"></span>
          <span className={`font-semibold italic tracking-wide text-sky-100/90 ${isSm ? 'text-[9px]' : 'text-[10px] sm:text-[11px]'}`}>
            Best guide for bright future
          </span>
          <span className="h-[1px] bg-sky-400/70 w-2.5"></span>
        </div>
      </div>
    </Link>
  );
};

