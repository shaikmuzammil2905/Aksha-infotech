import React, { useEffect, useState } from 'react';

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadingOut(true);
    }, 1300);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

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
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#030816] via-[#06142e] to-[#0a234f] px-6 transition-opacity duration-500 cursor-pointer ${
        fadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="AKSHA Infotech Welcome Splash Screen"
    >
      {/* Ambient Radial Neon Glow */}
      <div className="relative flex flex-col items-center justify-center max-w-lg w-full">
        <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full scale-110 animate-pulse pointer-events-none" />

        {/* Large Transparent Neon Logo */}
        <img
          src="/images/logo.png"
          alt="Aksha Infotech Pvt Ltd — Best guide for bright future"
          className="relative z-10 w-72 sm:w-96 md:w-[440px] h-auto object-contain drop-shadow-[0_0_28px_rgba(56,189,248,0.45)] animate-scale-in"
        />

        {/* Animated Shimmer Loading Bar */}
        <div className="relative z-10 mt-8 w-44 sm:w-56 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#0284c7] via-[#38bdf8] to-[#2563eb] rounded-full animate-[loadingBar_1.3s_ease-in-out_forwards]" />
        </div>

        <p className="relative z-10 mt-3 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-sky-200/80 animate-fade-in">
          Empowering Talent &bull; Building Futures
        </p>
      </div>
    </div>
  );
};
