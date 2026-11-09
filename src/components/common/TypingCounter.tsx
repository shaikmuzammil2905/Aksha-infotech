import React, { useState, useEffect, useRef } from 'react';

interface TypingCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export const TypingCounter: React.FC<TypingCounterProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 1600
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          setIsTyping(true);

          const startTime = performance.now();
          const targetStr = end.toLocaleString();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic for realistic acceleration then settle
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = Math.floor(easeOut * end);

            setDisplayValue(currentNum.toLocaleString());

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              setDisplayValue(targetStr);
              setIsTyping(false);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={elementRef} className="tabular-nums inline-flex items-baseline">
      <span>{prefix}{displayValue}{suffix}</span>
      {isTyping && (
        <span className="inline-block w-[3px] h-5 sm:h-7 ml-1 bg-brand-red animate-pulse rounded-full" />
      )}
    </span>
  );
};

