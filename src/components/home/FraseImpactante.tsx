import { m, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

const words = [
  "Acreditamos", "que", "contabilidade", "para", "negócios", "fitness", "é", "muito", "mais", "do", "que", "apurar", "impostos.",
  "É", "gerar", "previsibilidade", "e", "proteger", "sua", "margem", "de\u00A0lucro."
] as const;

const FraseImpactante = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"]
  });

  return (
    <div ref={sectionRef} className="relative w-full z-20 -mt-[100vh]">
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center bg-primary-500">
        <div className="container mx-auto px-5 md:px-10 xl:px-16 relative z-10">
          <WordRevealBlock progress={scrollYProgress} />
        </div>
      </section>
      
      {/* Spacers for Word Reveal: 150vh to scroll text */}
      <div className="h-[150vh] w-full pointer-events-none" />
    </div>
  );
};

const WordRevealBlock = ({ progress }: { progress: MotionValue<number> }) => {
  return (
    <p className="flex flex-wrap justify-center text-center text-[clamp(1.35rem,3.2vw,2.25rem)] md:text-[2.2rem] xl:text-[2.75rem] font-normal leading-[1.35] gap-x-[0.25em] gap-y-[0.1em] max-w-5xl mx-auto">
      {words.map((word, i) => {
        // Highlight "sua margem de lucro." (the last 3 items: "sua", "margem", "de lucro.")
        const isHighlight = i >= words.length - 3;
        const total = words.length;
        
        const animStart = 0.0;
        const animDuration = 0.6;
        const start = animStart + (i / total) * (animDuration * 0.8);
        const end = start + (animDuration * 0.2);
        
        const breakAfter = [6, 12, 17].includes(i); // Specific breaks for mobile

        return [
          <ScrollWord
            key={`word-${i}`}
            progress={progress}
            range={[start, end]}
            isHighlight={isHighlight}
          >
            {word}
          </ScrollWord>,
          breakAfter ? <span key={`break-${i}`} className="basis-full h-0 sm:hidden" /> : null
        ];
      })}
    </p>
  );
};

type ScrollWordProps = {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight: boolean;
};

const ScrollWord = ({ children, progress, range, isHighlight }: ScrollWordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(progress, range, ["rgba(255,255,255,0.4)", "#ffffff"]);
  
  return (
    <m.span 
      style={{ opacity, color }} 
      className={`inline-block transition-none ${isHighlight ? 'font-bold tracking-tight' : 'tracking-tight text-white/90'}`}
    >
      {children}
    </m.span>
  );
};

export default FraseImpactante;
