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

  const imgHeight = isSm ? 'h-9 sm:h-10' : isLg ? 'h-14 sm:h-16' : 'h-10 sm:h-12';

  return (
    <Link to="/" className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}>
      <img
        src="/images/logo.png"
        alt="Aksha Infotech Pvt Ltd — Best guide for bright future"
        className={`${imgHeight} w-auto object-contain mix-blend-screen brightness-110 transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </Link>
  );
};

