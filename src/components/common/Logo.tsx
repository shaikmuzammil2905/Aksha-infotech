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

  const imgHeight = isSm ? 'h-12 sm:h-14' : isLg ? 'h-20 sm:h-28' : 'h-14 sm:h-16 md:h-[68px]';

  return (
    <Link to="/" className={`inline-flex items-center group transition-transform duration-200 active:scale-95 ${className}`}>
      <img
        src="/images/logo.png"
        alt="Aksha Infotech Pvt Ltd — Best guide for bright future"
        className={`${imgHeight} w-auto max-w-[240px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.03]`}
      />
    </Link>
  );
};

