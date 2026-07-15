import { m, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const primaryPhrases = [
  "BASE SÓLIDA",
  "DECISÕES CLARAS",
  "MOVIMENTO CONTÍNUO",
  "PERFORMANCE RESPONSÁVEL"
];
const primaryItems = Array(16).fill(primaryPhrases).flat();

const secondaryPhrases = [
  "CONTROLE",
  "ESTRATÉGIA",
  "PREVISIBILIDADE",
  "EVOLUÇÃO"
];
const secondaryItems = Array(20).fill(secondaryPhrases).flat();

const FaixaTransicao = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Mapeia a velocidade para um fator (preservando o sinal para detectar direção)
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-5, 0, 5], {
    clamp: false
  });

  const baseX1 = useMotionValue(0);
  const baseX2 = useMotionValue(0);
  const directionFactor = useRef<number>(1);

  const x1 = useTransform(baseX1, (v) => `${wrap(-50, 0, v)}%`);
  const x2 = useTransform(baseX2, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * 0.008 * (delta / 16); // Velocidade base contínua (ainda mais lenta)
    
    const vf = velocityFactor.get();
    
    // Atualiza a direção baseado no scroll
    if (vf < 0) {
      directionFactor.current = -1; // Scroll pra cima
    } else if (vf > 0) {
      directionFactor.current = 1; // Scroll pra baixo
    }

    // Acelera a faixa de forma mais sutil durante o scroll
    moveBy += directionFactor.current * Math.abs(vf) * 0.015;

    // AMBAS as linhas se movem para a MESMA direção na MESMA velocidade
    baseX1.set(baseX1.get() - moveBy); // Linha principal
    baseX2.set(baseX2.get() - moveBy); // Linha secundária (mesma velocidade)
  });

  return (
    <div className="relative z-30 w-full bg-white py-4 flex items-center justify-center">
      <section className="relative w-full overflow-hidden bg-primary-500 py-4 md:py-5 -rotate-2 scale-[1.05]">
        
        {/* Primary Track (White Text) */}
        <div className="flex whitespace-nowrap text-white font-bold text-xl md:text-3xl lg:text-4xl tracking-tight uppercase">
          <m.div style={{ x: x1 }} className="flex gap-10 px-4 items-center">
            {primaryItems.map((text, i) => (
              <span key={i} className="flex items-center gap-10">
                {text}
                <span className="opacity-40">·</span>
              </span>
            ))}
          </m.div>
        </div>

        {/* Secondary Track (Thin Text / Details) - Hidden on Mobile */}
        <div className="hidden md:flex whitespace-nowrap text-white/70 font-bold text-[13px] md:text-sm lg:text-base tracking-[0.15em] uppercase mt-2">
          <m.div style={{ x: x2 }} className="flex gap-10 px-4 items-center">
            {secondaryItems.map((text, i) => (
              <span key={i} className="flex items-center gap-10">
                {text}
                <span className="opacity-40">//</span>
              </span>
            ))}
          </m.div>
        </div>

      </section>
    </div>
  );
};

export default FaixaTransicao;
