import { m } from 'framer-motion';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';
import { ArrowRight, ArrowLeft, Quote, Star, CheckCircle } from 'lucide-react';

const depoimentos = [
  {
    quote: "Eu acompanhava o saldo da conta e acreditava que tinha controle financeiro. O problema era não conseguir enxergar os compromissos futuros nem entender quanto realmente receberíamos das vendas no cartão. A FitCount organizou o fluxo, os recebíveis e as projeções. Hoje, nossas decisões não dependem mais de uma fotografia do dia.",
    author: "Rafael Souza",
    role: "Proprietário da Academia Impacto",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "A academia vendia bem, mas alguns planos geravam movimento sem entregar margem. A FitCount analisou custos, descontos e modalidades. Conseguimos entender quais planos precisavam ser revistos e passamos a discutir preço com base em dados, não em percepção.",
    author: "Mariana Alves",
    role: "Gestora do Studio Move",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "Antes da FitCount, nossa contabilidade estava concentrada em guias e obrigações. Não existia uma leitura estratégica da operação. A revisão tributária trouxe clareza sobre o enquadramento, corrigiu processos e mostrou quais pontos precisavam de acompanhamento contínuo.",
    author: "Carlos Mendes",
    role: "Sócio do CrossBox Elite",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "A estruturação do nosso controle de suplementos mudou o jogo. Antes, perdíamos produtos por validade e não sabíamos a margem real. Agora, a venda acessória paga quase todos os custos fixos da recepção. A visão comercial que eles trouxeram foi fantástica.",
    author: "Fernanda Lima",
    role: "Proprietária do IronGym",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "Ter acesso ao ecossistema de parceiros foi um divisor de águas. Quando precisamos estruturar o jurídico e as novas contratações, a FitCount nos conectou exatamente com quem precisávamos. Economizamos tempo e dinheiro no processo.",
    author: "Ricardo Gomes",
    role: "CEO da Rede PowerFit",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "Sempre tivemos dificuldade em entender nosso custo de aquisição por aluno. Com os relatórios detalhados e as reuniões de diretoria, passamos a saber exatamente onde investir nosso orçamento de marketing. A segurança é outra.",
    author: "Juliana Martins",
    role: "Diretora da FitLife Center",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "A terceirização do financeiro (BPO) foi a melhor escolha que fizemos. Nossa equipe da recepção passava horas conferindo caixa e boletos, com vários erros. Hoje tudo é automatizado e auditado diariamente.",
    author: "Marcos Ferreira",
    role: "Dono do Studio Funcional Fit",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop"
  },
  {
    quote: "Quando pensamos em abrir a segunda unidade, o planejamento tributário que eles fizeram evitou que entrássemos em um regime desvantajoso. O nível de especificidade que eles têm sobre o mercado fitness não tem preço.",
    author: "Amanda Costa",
    role: "Sócia-Fundadora da GymPoint",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
  }
];

const Depoimentos = () => {
  const { openModal } = useModalSolucoes();
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="w-full relative bg-[#070b11] py-24 lg:py-32 overflow-hidden isolate">

      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(240,76,64,0.1)] bg-primary-500/15 border border-primary-500/30 mb-6 transition-all hover:bg-primary-500/25 mx-auto"
          >
            <span className="text-primary-400">
              <CheckCircle size={14} strokeWidth={2.5} />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-300">
              Resultados Validados
            </span>
          </m.div>
          
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            O impacto real dos <br className="hidden md:block" />
            <span className="font-light italic text-slate-300">números na operação</span>
          </m.h2>
          
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-[1.1rem] text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Estratégia contábil e financeira não deve ficar restrita a relatórios. Veja como transformamos dados em direcionamento claro para negócios fitness.
          </m.p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mb-24 lg:mb-32 px-0 md:px-14 lg:px-16">
          
          {/* Left Arrow */}
          <button 
            onClick={scrollPrev} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0b1018]/90 backdrop-blur-md rounded-full border border-white/20 hidden md:flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            aria-label="Depoimento anterior"
          >
            <ArrowLeft size={20} />
          </button>

          {/* Embla Viewport */}
          <div 
            ref={emblaRef}
            className="overflow-hidden w-full pb-8 pt-4 cursor-grab active:cursor-grabbing"
          >
            <div className="flex -ml-6 lg:-ml-8 touch-pan-y">
              {depoimentos.map((depoimento, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_90vw] sm:flex-[0_0_80vw] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 lg:pl-8 min-w-0"
                >
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#0b1018] border border-white/5 hover:border-white/10 rounded-[2rem] p-7 lg:p-8 flex flex-col w-full h-full overflow-hidden transition-all duration-500"
                >
                  {/* Card Hover Glow */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-primary-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Stars & Icon */}
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />
                      ))}
                    </div>
                    <Quote size={32} className="text-white/5 rotate-180 group-hover:text-primary-500/10 transition-colors duration-500" />
                  </div>

                  {/* Quote Text */}
                  <p className="text-base lg:text-[15.5px] text-slate-300 font-light leading-[1.75] italic flex-1 mb-6 relative z-10">
                    "{depoimento.quote}"
                  </p>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 relative z-10 pt-5 border-t border-white/5 mt-auto">
                    <img 
                      src={depoimento.image} 
                      alt={depoimento.author}
                      className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0 group-hover:border-primary-500/30 transition-colors"
                    />
                    <div>
                      <h4 className="text-white font-medium text-[15px] mb-0.5">{depoimento.author}</h4>
                      <p className="text-slate-400 text-[13px] font-light">{depoimento.role}</p>
                    </div>
                  </div>
                </m.div>
              </div>
            ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            onClick={scrollNext} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0b1018]/90 backdrop-blur-md rounded-full border border-white/20 hidden md:flex items-center justify-center text-white/90 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            aria-label="Próximo depoimento"
          >
            <ArrowRight size={20} />
          </button>
          
          {/* Mobile Navigation Arrows */}
          <div className="flex md:hidden items-center justify-center gap-4 mt-4">
            <button 
              onClick={scrollPrev} 
              className="w-12 h-12 bg-[#0b1018]/90 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/10 transition-all"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={scrollNext} 
              className="w-12 h-12 bg-[#0b1018]/90 rounded-full border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/10 transition-all"
              aria-label="Próximo depoimento"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-[2.5rem] p-8 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative isolate shadow-2xl shadow-primary-500/10">
          
          {/* Video Background */}
          <div className="absolute inset-0 -z-10 w-full h-full bg-dark-900">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/background/cta-bg-laranja-final.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Abstract graphics inside CTA */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="w-full lg:w-3/5 relative z-10 text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Prepare seu negócio para o próximo movimento.
            </h3>
            <p className="text-white/80 text-lg max-w-xl mx-auto lg:mx-0 font-light">
              Solicite um diagnóstico e entenda quais pontos da sua operação precisam de mais controle, clareza e direção.
            </p>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end relative z-10 shrink-0">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-painel-diagnostico'));
                openModal();
              }}
              className="group flex items-center justify-center gap-4 px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-[15px] bg-[#070b11] text-white hover:bg-black transition-all duration-300 w-full sm:w-auto hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5 hover:border-white/10"
            >
              <span className="tracking-wide uppercase">Solicitar um diagnóstico</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                <ArrowRight size={16} className="text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Depoimentos;

