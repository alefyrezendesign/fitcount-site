import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Activity } from 'lucide-react';

const ParallaxImpacto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the background image
  const yImage = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  // Refined entrance for the second part of the phrase
  // Adjusting timing to finish exactly when section reaches center (0.5) or slightly before
  const opacitySecond = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);
  const ySecond = useTransform(scrollYProgress, [0.2, 0.45], [30, 0]);
  const blurSecond = useTransform(scrollYProgress, [0.2, 0.45], ["blur(12px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center bg-dark-950">
      
      {/* Background Image with Parallax */}
      <m.div 
        style={{ y: yImage }} 
        className="absolute inset-0 w-full h-[140%] -top-[20%] z-0"
      >
        <img 
          src="/background/bg-impacto.jpg" 
          alt="Impacto Fitcount" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        {/* Dark Overlays for legibility */}
        <div className="absolute inset-0 bg-dark-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950" />
      </m.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <div className="mb-6 md:mb-8 flex justify-center">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(240,76,64,0.1)] bg-primary-500/15 border border-primary-500/30 transition-all hover:bg-primary-500/25 w-fit"
          >
            <span className="text-primary-400">
              <Activity size={14} strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-300">
              Gestão e Performance
            </span>
          </m.div>
        </div>

        <h2 className="text-[2.75rem] sm:text-5xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1] max-w-5xl">
          <m.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            Performance <br className="block md:hidden" /> de verdade
          </m.span>
          <m.span 
            style={{ opacity: opacitySecond, y: ySecond, filter: blurSecond }}
            className="block text-primary-500"
          >
            começa na <br className="block md:hidden" /> gestão.
          </m.span>
        </h2>
      </div>

    </section>
  );
};

export default ParallaxImpacto;
