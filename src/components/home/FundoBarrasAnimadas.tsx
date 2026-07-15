import { useEffect, useRef, useState } from 'react';
import { useTransform, MotionValue, useInView } from 'framer-motion';

export const FundoBarrasAnimadas = ({ progress, isOptimized = false }: { progress: MotionValue<number>, isOptimized?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  
  // Track optimized factor for smooth transition in rAF
  const isOptimizedRef = useRef(isOptimized);
  const optimizedFactorRef = useRef(isOptimized ? 1 : 0);

  useEffect(() => {
    isOptimizedRef.current = isOptimized;
  }, [isOptimized]);
  
  // 35 bars for a thinner, more dynamic look
  const NUM_BARS = 35;
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Map scroll progress to a normalized 0-1 value
  // The scroll progress of AnalisesRx will go 0 to 1 over the 250vh scroll.
  const normalizedProgress = useTransform(progress, [0, 1], [0, 1]);

  const [barsData] = useState(() => {
    const arr = [];
    for (let i = 0; i < NUM_BARS; i++) {
      const nx = i / (NUM_BARS - 1);
      
      // U-shape for the initial state (smaller in center, larger on sides)
      const xCentered = (nx * 2 - 1);
      // Make the center even lower by squaring and then applying a steep drop
      const uShape = Math.pow(xCentered, 2); 
      
      // Much lower heights to keep it strictly at the bottom
      const initialHeight = 2 + (uShape * 15); // 2% to 17%
      const targetHeight = 5 + (uShape * 25) + (Math.random() * 10); // 5% to 40% maximum on sides
      
      // Speed of the subtle continuous oscillation (made almost imperceptible)
      const speed = 0.1 + Math.random() * 0.2; 
      const phase = Math.random() * Math.PI * 2;
      
      // Amplitude: Base amplitude at rest (almost imperceptible)
      const baseAmplitude = 0.2 + Math.random() * 0.5; // 0.2% to 0.7%
      
      arr.push({
        id: i,
        x: (i / NUM_BARS) * 100, 
        w: 100 / NUM_BARS, // Exact width to prevent overlapping opacities
        initialHeight,
        targetHeight,
        speed,
        phase,
        baseAmplitude
      });
    }
    return arr;
  });

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;
    const start = Date.now();

    const render = () => {
      const t = (Date.now() - start) / 1000;
      const p = normalizedProgress.get(); // 0 to 1

      // Lerp optimized factor for smooth surge animation
      const targetFactor = isOptimizedRef.current ? 1 : 0;
      optimizedFactorRef.current += (targetFactor - optimizedFactorRef.current) * 0.08;
      const opt = optimizedFactorRef.current;

      // Just subtle animation, NO surge for optimized
      barsData.forEach((bar, index) => {
        const el = barsRef.current[index];
        if (el) {
          // Base height interpolated by scroll
          let baseHeight = bar.initialHeight * (1 - p) + bar.targetHeight * p;
          
          // Amplitude increases as we scroll to make animation more intense
          let currentAmplitude = bar.baseAmplitude + (p * 12); 
          
          // Organic independent oscillation
          const oscillation = Math.sin(t * bar.speed + bar.phase) * currentAmplitude;
          
          // Final height calculation. Reduced max cap significantly (e.g., 45% max)
          const finalHeight = Math.max(1, Math.min(45, baseHeight + oscillation));
          
          el.style.height = `${finalHeight}%`;
        }
      });

      if (glowRef.current) {
        // Intensify glow slightly
        glowRef.current.style.opacity = (0.95 + opt * 0.2).toString();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [barsData, normalizedProgress, isInView]);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full overflow-hidden transition-colors duration-700 bg-transparent z-0 pointer-events-none hidden md:block`}>
      <style>{`
        .hero-bar-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          z-index: 2;
          
          /* Blur on the container perfectly merges the bars without summing opacities in seams */
          filter: blur(2px);
        }

        .hero-bar {
          position: absolute;
          bottom: 0;
          left: calc(var(--x) * 1%);
          width: calc(var(--w) * 1%);
          
          /* Gradient from white (top) to orange (bottom) */
          background: ${isOptimized ? 
            'linear-gradient(to top, rgba(229, 75, 65, 1) 0%, rgba(255, 255, 255, 1) 100%)' : 
            'linear-gradient(to top, rgba(229, 75, 65, 1) 0%, rgba(255, 255, 255, 1) 100%)'};
          
          transform-origin: bottom center;
          will-change: height;
          
          /* Subtle rounding on top creates elegant peaks when blurred */
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        /* Removed the intense base glow entirely as requested */
        .hero-base-glow {
          display: none;
        }
        
        /* Gradient at the top to blend with the content */
        .hero-top-fade {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60%;
          background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.4) 60%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }

        /* Removed bottom white fade as requested */
      `}</style>
      
      <div className="hero-bar-container">
        {barsData.map((bar, i) => (
          <div
            key={bar.id}
            ref={(el) => { barsRef.current[i] = el; }}
            className="hero-bar transition-colors duration-700"
            style={{
              '--x': bar.x,
              '--w': bar.w,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Removed the glow div completely */}

      <div className="absolute top-0 left-0 w-full h-[60%] z-10 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.4) 60%, transparent 100%)' }} />
      </div>

    </div>
  );
};
