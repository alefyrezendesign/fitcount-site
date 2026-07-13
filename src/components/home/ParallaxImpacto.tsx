import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Academia vazia preparada para o treino" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        {/* Dark Overlays for legibility */}
        <div className="absolute inset-0 bg-dark-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-dark-950" />
      </m.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-5xl">
          <m.span 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="block"
          >
            Performance de verdade
          </m.span>
          <m.span 
            style={{ opacity: opacitySecond, y: ySecond, filter: blurSecond }}
            className="block text-primary-500 p-2 -m-2 mt-2"
          >
            começa na gestão.
          </m.span>
        </h2>
      </div>

    </section>
  );
};

export default ParallaxImpacto;
