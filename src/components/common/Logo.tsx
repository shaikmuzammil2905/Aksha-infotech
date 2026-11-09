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
      {/* Official Circular Neon Emblem from image copy 15.png */}
      <div className="relative flex-shrink-0">
        <img
          src="/images/logo.png"
          alt="AKSHA Infotech Pvt Ltd Logo"
          className={`${imgSize} rounded-full object-cover shadow-lg border border-sky-400/40 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col select-none leading-none">
        <div className="flex items-center gap-1.5 tracking-tight">
          <span className={`font-black text-white font-sans tracking-wide drop-shadow ${isSm ? 'text-base' : isLg ? 'text-2xl' : 'text-xl'}`}>
            AKSHA
          </span>
          <span className="text-brand-red font-extrabold text-xs tracking-wider">
            INFOTECH
          </span>
        </div>
        <div className="flex items-center gap-1 my-0.5">
          <span className="h-[1px] bg-sky-400/60 w-2"></span>
          <span className={`font-bold tracking-widest text-sky-300 uppercase ${isSm ? 'text-[8px]' : 'text-[9.5px]'}`}>
            PVT LTD
          </span>
          <span className="h-[1px] bg-sky-400/60 w-2"></span>
        </div>
        <span className={`font-extrabold tracking-wider text-slate-300 uppercase ${isSm ? 'text-[6.5px]' : 'text-[7.5px]'}`}>
          Best Guide for Bright Future
        </span>
      </div>
    </Link>
  );
};

