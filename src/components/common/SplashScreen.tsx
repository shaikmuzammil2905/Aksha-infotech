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
        <div className="relative z-10 mt-4 space-y-1 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide">
            Aksha Infotech <span className="text-amber-400">Pvt Ltd</span>
          </h2>
          <p className="text-xs sm:text-sm font-semibold italic text-sky-200/90">
            &mdash; Best guide for bright future &mdash;
          </p>
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

