import { m } from 'framer-motion';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';
import { Zap } from 'lucide-react';

const solutions = [
  {
    title: "Planejamento tributário",
    desc: "Revisamos seu enquadramento e obrigações para eliminar cada real pago indevidamente pelo seu negócio fitness."
  },
  {
    title: "Análise de margem",
    desc: "Identificamos modalidades com margem negativa e criamos estratégias de precificação orientadas por dados."
  },
  {
    title: "Gestão financeira",
    desc: "Obtenha clareza com projeções semanais, alertas de liquidez e um controle integrado da sua academia ou box."
  },
  {
    title: "Controle de suplementos",
    desc: "Otimizamos o giro de produtos da sua loja ou cantina, reduzindo perdas e impulsionando receitas acessórias."
  },
  {
    title: "Precificação estratégica",
    desc: "Aplicamos mark-ups inteligentes nas suas mensalidades para maximizar lucros sem perder alunos."
  },
  {
    title: "Diagnóstico 360º",
    desc: "Realizamos uma avaliação completa dos seus processos para identificar gargalos operacionais e oportunidades."
  }
];

const ResumoSolucoes = () => {
  const { openModal } = useModalSolucoes();

  return (
    <section className="relative bg-[#070b11] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl relative z-10">
        
        {/* Header matching reference style - Flex layout para não quebrar o título */}
        <div className="w-full mb-16 lg:mb-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          
          <div className="shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(240,76,64,0.1)] bg-primary-500/15 border border-primary-500/30 mb-6 transition-all hover:bg-primary-500/25 w-fit"
            >
              <span className="text-primary-400">
                <Zap size={14} strokeWidth={2.5} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-300">
                Nossas Soluções
              </span>
            </m.div>

            <m.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white md:whitespace-nowrap"
            >
              Soluções para <br />
              <span className="font-light italic text-slate-300">resultados reais</span>
            </m.h2>
          </div>

          {/* Retângulo laranja CTA ocupando o restante do espaço até o limite */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-auto flex-1 max-w-[680px] flex flex-col md:flex-row items-center justify-between bg-primary-500 rounded-3xl p-8 lg:px-10 lg:py-10 shadow-xl shadow-primary-500/20 gap-6"
          >
            <span className="text-white text-base lg:text-xl font-medium text-center md:text-left">
              Quer estruturar e proteger <br className="block sm:hidden" /> seu negócio fitness?
            </span>
            <button
              onClick={() => openModal()}
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary-600 hover:bg-gray-50 transition-colors shadow-sm shrink-0 w-full md:w-auto justify-center"
            >
              <span className="text-[15px] font-bold uppercase tracking-wide">Falar com consultor</span>
              <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600"><path d="m9 18 6-6-6-6"/></svg>
              </div>
            </button>
          </m.div>
        </div>

        {/* Grid matching reference cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, index) => (
            <m.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0b1018] border border-white/5 hover:border-white/10 rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-all duration-500 min-h-[220px] md:min-h-[380px]"
            >
              
              {/* Number */}
              <span className="text-slate-500 text-sm font-medium mb-6 block tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white leading-tight mb-5 tracking-tight">
                {sol.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-[15px] leading-relaxed mb-12 flex-1">
                {sol.desc}
              </p>

              {/* Bottom Glow & Button */}
              <div className="mt-auto relative z-10 flex items-center">
                
                {/* Glow Effect at bottom left */}
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary-500/10 rounded-full blur-[40px] group-hover:bg-primary-500/30 transition-colors duration-700 pointer-events-none" />
                
                {/* Circular + Button -> Arrow and Modal Action */}
                <button 
                  onClick={() => openModal()}
                  className="relative z-10 w-11 h-11 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(240,76,64,0.3)] group-hover:shadow-[0_0_25px_rgba(240,76,64,0.6)] group-hover:scale-110 transition-all duration-300"
                  title="Saber mais"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>

            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResumoSolucoes;
