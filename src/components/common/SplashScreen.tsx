import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => {
        setFadingOut(true);
        setTimeout(() => setVisible(false), 300);
      }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#030816] via-[#06142e] to-[#0a234f] px-6 transition-opacity duration-500 cursor-pointer touch-none ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="AKSHA Infotech Welcome Splash Screen"
    >
      {/* Ambient Radial Glow */}
      <div className="relative flex flex-col items-center justify-center max-w-lg w-full text-center">
        <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full scale-110 animate-pulse pointer-events-none" />

        {/* Transparent Gold & Silver 'Aa' Emblem */}
        <img
          src="/images/logo.png"
          alt="Aksha Infotech Pvt Ltd Logo"
          className="relative z-10 w-40 sm:w-52 md:w-60 h-auto object-contain drop-shadow-[0_0_28px_rgba(251,191,36,0.45)] animate-scale-in"
        />

        {/* Brand Name & Tagline */}
        <div className="relative z-10 mt-4 flex flex-col items-center leading-none space-y-1 animate-fade-up">
          <span className="text-3xl sm:text-4xl font-black text-brand-red tracking-wide">
            AKSHA
          </span>
          <div className="flex items-center gap-1.5 my-1">
            <span className="h-[1px] bg-sky-400 w-4"></span>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase">
              INFOTECH PVT LTD
            </span>
            <span className="h-[1px] bg-sky-400 w-4"></span>
          </div>
          <span className="text-[10px] sm:text-xs font-extrabold tracking-widest text-brand-red uppercase">
            BEST GUIDE FOR RIGHT FUTURE
          </span>
        </div>

        {/* Animated Shimmer Loading Bar */}
        <div className="relative z-10 mt-7 w-48 sm:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400 via-sky-400 to-[#2563eb] rounded-full animate-[loadingBar_2s_ease-in-out_forwards]" />
        </div>

        <p className="relative z-10 mt-3 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-sky-200/80 animate-fade-in">
          Empowering Talent &bull; Building Futures
        </p>
      </div>
    </div>
  );
};

