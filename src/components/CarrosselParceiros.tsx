import { useRef, useEffect, useCallback } from 'react';

const IMG_DESKTOP = '/parceiros-carrossel/parceiros-desktop.webp';
const IMG_MOBILE = '/parceiros-carrossel/parceiros.webp';
const IMG_ROW_2 = '/parceiros-carrossel/parceiros-desktop-2.webp';

// Enough copies to always cover the viewport + overflow
const COPIES = 4;
// Base speed in px/s
const BASE_SPEED_1 = 50;
const BASE_SPEED_2 = 50;

/**
 * Scroll-reactive infinite marquee.
 * - Moves left by default.
 * - Reverses direction while the user scrolls in the opposite direction.
 * - No hover pause, transparent bg, seamless loop.
 */
const CarrosselParceiros = () => {
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopTrack2Ref = useRef<HTMLDivElement>(null);
  const mobileTrack2Ref = useRef<HTMLDivElement>(null);

  const offsetRef = useRef(0);
  const offset2Ref = useRef(0);
  
  const directionRef = useRef(-1); // -1 left, 1 right
  
  const singleWRef = useRef(0);
  const singleW2Ref = useRef(0);
  
  const rafRef = useRef(0);
  const prevTimeRef = useRef(0);
  const prevScrollRef = useRef(0);

  /* ── Scroll direction detection ────────────────────────── */
  const onScroll = useCallback(() => {
    const y = window.scrollY;
    const delta = y - prevScrollRef.current;
    if (Math.abs(delta) > 2) {
      directionRef.current = delta > 0 ? -1 : 1;
    }
    prevScrollRef.current = y;
  }, []);

  /* ── Measure one image width ───────────────────────────── */
  const measure = useCallback(() => {
    const track = desktopTrackRef.current ?? mobileTrackRef.current;
    if (!track) return;
    const img = track.querySelector('img');
    if (img && img.offsetWidth > 0) {
      singleWRef.current = img.offsetWidth;
    }
  }, []);

  const measure2 = useCallback(() => {
    const track = desktopTrack2Ref.current ?? mobileTrack2Ref.current;
    if (!track) return;
    const img = track.querySelector('img');
    if (img && img.offsetWidth > 0) {
      singleW2Ref.current = img.offsetWidth;
    }
  }, []);

  /* ── Animation loop ────────────────────────────────────── */
  useEffect(() => {
    prevScrollRef.current = window.scrollY;
    window.addEventListener('scroll', onScroll, { passive: true });

    const tick = (t: number) => {
      if (!prevTimeRef.current) prevTimeRef.current = t;
      const dt = (t - prevTimeRef.current) / 1000;
      prevTimeRef.current = t;

      // Track 1
      offsetRef.current += BASE_SPEED_1 * directionRef.current * dt;
      const w1 = singleWRef.current;
      if (w1 > 0) {
        while (offsetRef.current <= -w1) offsetRef.current += w1;
        while (offsetRef.current >= 0) offsetRef.current -= w1;
      }
      const tx1 = `translateX(${offsetRef.current}px)`;
      if (desktopTrackRef.current) desktopTrackRef.current.style.transform = tx1;
      if (mobileTrackRef.current) mobileTrackRef.current.style.transform = tx1;

      // Track 2 (Direção oposta e velocidade diferente)
      offset2Ref.current += BASE_SPEED_2 * (-directionRef.current) * dt;
      const w2 = singleW2Ref.current || singleWRef.current; 
      if (w2 > 0) {
        while (offset2Ref.current <= -w2) offset2Ref.current += w2;
        while (offset2Ref.current >= 0) offset2Ref.current -= w2;
      }
      const tx2 = `translateX(${offset2Ref.current}px)`;
      if (desktopTrack2Ref.current) desktopTrack2Ref.current.style.transform = tx2;
      if (mobileTrack2Ref.current) mobileTrack2Ref.current.style.transform = tx2;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <div className="w-full overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28 bg-white relative flex flex-col gap-6 md:gap-10">
      {/* Fade masks no container relative */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-fade-edges-white" />

      {/* ── Desktop track 1 ──────────────────────────────── */}
      <div
        ref={desktopTrackRef}
        className="hidden md:flex items-center will-change-transform w-max"
      >
        {Array.from({ length: COPIES }).map((_, i) => (
          <img
            key={`dt1-${i}`}
            src={IMG_DESKTOP}
            alt="Parceiros RX Soluções"
            onLoad={i === 0 ? measure : undefined}
            draggable={false}
            className="h-16 lg:h-20 xl:h-24 max-w-none object-contain select-none pointer-events-none flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity invert grayscale"
          />
        ))}
      </div>

      {/* ── Desktop track 2 ──────────────────────────────── */}
      <div
        ref={desktopTrack2Ref}
        className="hidden md:flex items-center will-change-transform w-max"
      >
        {Array.from({ length: COPIES }).map((_, i) => (
          <img
            key={`dt2-${i}`}
            src={IMG_ROW_2}
            alt="Parceiros RX Soluções"
            onLoad={i === 0 ? measure2 : undefined}
            draggable={false}
            className="h-16 lg:h-20 xl:h-24 max-w-none object-contain select-none pointer-events-none flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity invert grayscale"
          />
        ))}
      </div>

      {/* ── Mobile track 1 ───────────────────────────────── */}
      <div
        ref={mobileTrackRef}
        className="flex md:hidden items-center will-change-transform w-max"
      >
        {Array.from({ length: COPIES }).map((_, i) => (
          <img
            key={`mt1-${i}`}
            src={IMG_MOBILE}
            alt="Parceiros RX Soluções"
            onLoad={i === 0 ? measure : undefined}
            draggable={false}
            className="h-20 sm:h-24 max-w-none object-contain select-none pointer-events-none flex-shrink-0 opacity-60 invert grayscale"
          />
        ))}
      </div>

      {/* ── Mobile track 2 ───────────────────────────────── */}
      <div
        ref={mobileTrack2Ref}
        className="flex md:hidden items-center will-change-transform w-max"
      >
        {Array.from({ length: COPIES }).map((_, i) => (
          <img
            key={`mt2-${i}`}
            src={IMG_ROW_2}
            alt="Parceiros RX Soluções"
            onLoad={i === 0 ? measure2 : undefined}
            draggable={false}
            className="h-20 sm:h-24 max-w-none object-contain select-none pointer-events-none flex-shrink-0 opacity-60 invert grayscale"
          />
        ))}
      </div>
    </div>
  );
};

export default CarrosselParceiros;

