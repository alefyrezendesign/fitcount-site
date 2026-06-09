import { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform, MotionValue  } from 'framer-motion';
import { Shield, TrendingUp, Wallet, Package, Tag, Activity, ArrowRight, Lightbulb } from 'lucide-react';
import { AnimatedTitle } from '../ui/AnimatedTitle';
import { TypewriterBadge } from '../ui/TypewriterBadge';

const solutions = [
  {
    id: 'planejamento',
    title: "Planejamento tributário especializado",
    desc: "Revisamos seu enquadramento, regimes e obrigações acessórias para eliminar cada real pago indevidamente.",
    icon: <Shield className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'margem',
    title: "Análise de margem por categoria",
    desc: "Identificamos categorias com margem negativa e criamos estratégias de precificação orientadas por dados.",
    icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'financeiro',
    title: "Gestão financeira e fluxo de caixa",
    desc: "Obtenha clareza com projeções semanais, alertas de liquidez e um controle integrado de antecipação de recebíveis.",
    icon: <Wallet className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'estoque',
    title: "Controle de estoque",
    desc: "Otimizamos o giro de produtos da sua farmácia, reduzindo rupturas e prevenindo perdas financeiras.",
    icon: <Package className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557683304-673a23048d34?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'precificacao',
    title: "Precificação estratégica",
    desc: "Aplicamos mark-ups inteligentes e dinâmicos para maximizar seus lucros sem perder a competitividade.",
    icon: <Tag className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557682257-2f9c37a3a5f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'diagnostico',
    title: "Diagnóstico de gestão da farmácia",
    desc: "Realizamos uma avaliação 360º dos seus processos para identificar oportunidades de melhoria imediata.",
    icon: <Activity className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />,
    image: "https://images.unsplash.com/photo-1557683325-3ba8f0df79de?auto=format&fit=crop&w=600&q=80"
  },
];

const SolutionCard = ({ solution, index, scrollYProgress }: { solution: any, index: number, scrollYProgress: MotionValue<number> }) => {
  const isEarly = index < 2;

  // A animação de scroll (para cards >= 2)
  const start = 0.12 + (index * 0.08); 
  const end = start + 0.15;
  
  const scrollOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const scrollX = useTransform(scrollYProgress, [start, end], [60, 0]);

  return (
    <m.div 
      style={isEarly ? {} : { opacity: scrollOpacity, x: scrollX }}
      initial={isEarly ? { opacity: 0, x: 60 } : undefined}
      whileInView={isEarly ? { opacity: 1, x: 0 } : undefined}
      viewport={isEarly ? { once: true, margin: "0px -50px 0px 0px" } : undefined}
      transition={isEarly ? { duration: 0.7, delay: 1.2 + (index * 0.15), ease: [0.25, 0.1, 0.25, 1] } : undefined}
      className="group w-[55vw] sm:w-[35vw] md:w-[25vw] lg:w-[20vw] xl:w-[14vw] flex-shrink-0 flex flex-col justify-start px-3 md:px-5 relative py-12 md:py-20 min-h-[65vh] cursor-pointer"
    >
      {/* Giant Index Number */}
      <div className="text-[5rem] md:text-[7rem] font-medium text-slate-800 transition-colors duration-500 group-hover:text-primary-600 mb-8 md:mb-10 tracking-tighter leading-none">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Minimalist Border Below Number */}
      <div className="w-full h-[2px] bg-slate-200 mb-8 md:mb-12 relative overflow-hidden">
         <div className="absolute top-0 left-0 h-full w-0 bg-primary-500 transition-all duration-700 ease-out group-hover:w-full"></div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-5 md:mb-8 leading-[1.3] transition-colors duration-500 group-hover:text-primary-700">
        {solution.title}
      </h3>
      
      {/* Description */}
      <p className="text-[14.5px] md:text-[15.5px] text-slate-500 font-medium leading-[1.7]">
        {solution.desc}
      </p>
    </m.div>
  );
};

const ResumoSolucoes = () => {
  const targetRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollContainerRef.current) {
        // Largura total de todos os itens (scrollWidth) - largura da tela (innerWidth)
        const totalWidth = scrollContainerRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // O valor negativo exato que a div precisa se mover para a direita encostar na borda direita
        const range = Math.max(0, totalWidth - viewportWidth);
        // Usamos -range para mover para a esquerda
        setScrollRange(-range); 
      }
    };

    updateScrollRange();
    // Re-calcular caso a janela mude de tamanho
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Mapeia o scroll vertical para o movimento exato em pixels
  // [0, 0.15] -> O conteúdo fica parado (dá 1 ou 2 scrolls de respiro para ler a introdução)
  // [0.15, 0.85] -> Ocorre o movimento horizontal
  // [0.85, 1] -> Fica parado no último item antes de soltar a seção
  const x = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0, scrollRange, scrollRange]);

  return (
    <section 
      ref={targetRef}
      id="solucoes" 
      className="relative h-[380vh] bg-white" // h-[380vh] dá o espaço para o scroll-jacking ocorrer
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-10 md:pt-14 lg:pt-20">
        
        {/* Background decoration */}
        <div
          className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"
        />
        <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-white to-transparent pointer-events-none" />

        {/* Horizontal Scroll Container (Animado pelo Framer Motion) */}
        <m.div 
          ref={scrollContainerRef}
          style={{ x }} 
          className="flex items-stretch gap-8 md:gap-16 px-5 sm:px-8 md:px-24 lg:px-32 w-max relative z-10"
        >
          
          {/* Slide 1: Intro / MenuPrincipal */}
          <div className="w-[85vw] sm:w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[40vw] flex-shrink-0 flex flex-col justify-center items-start px-2 sm:px-4 pl-0 py-8">
            
            <m.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6"
            >
              <TypewriterBadge 
                text="Soluções"
                icon={<Lightbulb className="w-3.5 h-3.5 text-primary-600" strokeWidth={2.5} />}
                autoStart
              />
            </m.div>

            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] mb-6 text-dark-900">
              <AnimatedTitle lines={["Resultados de", "ponta a ponta."]} delay={0.1} />
            </h2>

            <m.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 100,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
                duration: 0.8
              }}
              className="text-[1rem] md:text-[1.1rem] text-slate-600 font-medium leading-relaxed max-w-2xl mb-8"
            >
              Nossas soluções resolvem problemas reais. Combinamos expertise contábil, tributária e financeira para conectar sua farmácia às estratégias mais aderentes ao seu momento de crescimento.
            </m.p>

            <div className="mt-8 md:mt-12 flex items-center gap-4 text-primary-600 font-semibold tracking-wide">
              <span className="animate-pulse">Continue rolando</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>

          {/* Slides 2-7: Solution Cards */}
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id}
              solution={solution}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default ResumoSolucoes;

