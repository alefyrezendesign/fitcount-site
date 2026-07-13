import { m, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, BarChart2, CalendarDays, TrendingUp, Rocket } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const allCards = [
  {
    number: "01",
    title: "Margem protegida",
    subtitle: "Auditoria Tributária Contínua",
    desc: "Auditoria tributária contínua que devolve ao caixa o que nunca deveria ter saído. Monitoramos cada operação fiscal para garantir que seu negócio fitness não pague mais do que deve.",
    icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
  },
  {
    number: "02",
    title: "Clareza estratégica",
    subtitle: "Dashboards & Indicadores",
    desc: "Dashboards e indicadores construídos para a realidade do mundo fitness. Visualize seus números com clareza e tome decisões baseadas em dados reais.",
    icon: <BarChart2 className="w-6 h-6 text-primary-500" />,
  },
  {
    number: "03",
    title: "Previsibilidade real",
    subtitle: "Planejamento Financeiro",
    desc: "Planejamento financeiro sob medida, para decidir com 90 dias de antecedência. Antecipe cenários e proteja o futuro da sua operação com projeções precisas.",
    icon: <CalendarDays className="w-6 h-6 text-primary-500" />,
  },
  {
    number: "04",
    title: "Crescimento escalável",
    subtitle: "Estratégia de Expansão",
    desc: "Estruture sua operação para crescer sem perder rentabilidade. Modelagem financeira para abertura de novas unidades de forma segura e sustentável.",
    icon: <TrendingUp className="w-6 h-6 text-primary-500" />,
  },
];

const Beneficios = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 lg:py-32 relative w-full bg-slate-900 z-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header Centered */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <SectionHeader
            badgeIcon={<Rocket className="w-3.5 h-3.5" />}
            badgeText="Evolução Estratégica"
            titleLines={["O mercado fitness", "está evoluindo."]}
            subtitle="Seu negócio não precisa apenas mudar de contabilidade. Ele precisa de segurança em cada operação, clareza nos dados e resultados reais."
            align="center"
            inverted={true}
          />
        </div>

        {/* Grid de Cards */}
        <m.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8"
        >
          {allCards.map((card, idx) => (
            <m.div
              key={idx}
              variants={cardVariants}
              className="group relative flex flex-col p-8 rounded-3xl bg-dark-900 border border-white/5 hover:border-primary-500/50 hover:bg-dark-950 transition-all duration-500 overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Number Background Watermark */}
              <div className="absolute -right-4 -top-8 text-[120px] font-black text-white/[0.02] group-hover:text-primary-500/[0.05] transition-colors duration-500 pointer-events-none select-none">
                {card.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-500 relative z-10">
                {card.icon}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-grow">
                <h4 className="text-primary-500 text-[12px] uppercase tracking-widest font-bold mb-2">
                  {card.subtitle}
                </h4>
                <h3 className="font-bold text-xl text-white mb-4 tracking-tight group-hover:text-primary-400 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-surface-400 text-[14px] leading-relaxed group-hover:text-surface-300 transition-colors duration-300">
                  {card.desc}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>

      </div>
    </section>
  );
};

export default Beneficios;
