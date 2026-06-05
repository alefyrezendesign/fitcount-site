import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

const ContatoFormulario = () => {
  const [motivo, setMotivo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleSelectMotivo = (e: any) => {
      if (e.detail && e.detail.motivo) {
        setMotivo(e.detail.motivo);
      }
    };
    window.addEventListener('selectContatoMotivo', handleSelectMotivo);
    return () => window.removeEventListener('selectContatoMotivo', handleSelectMotivo);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="formulario-contato" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50/50 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Lado Esquerdo */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-dark-900 tracking-tight leading-tight mb-6"
            >
              Nossos especialistas estão prontos para analisar sua operação.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-surface-600 mb-8 max-w-lg leading-relaxed"
            >
              Preencha o formulário e um de nossos consultores especializados em varejo farmacêutico entrará em contato em até 24 horas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ul className="space-y-4">
                {[
                  "Diagnóstico inicial gratuito",
                  "Análise do seu regime tributário atual",
                  "Plano de transição sem dor de cabeça"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-dark-900 font-medium">
                    <CheckCircle2 size={20} className="text-primary-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Lado Direito - Formulário */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-2xl border border-surface-200 p-8 md:p-10 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.08)] relative z-10"
            >
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-surface-600">Nossa equipe entrará em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="text-sm font-semibold text-dark-900 ml-1">Nome completo</label>
                    <input 
                      id="nome"
                      type="text" 
                      required
                      placeholder="João da Silva"
                      className="w-full bg-surface-50 border border-surface-200 rounded-3xl px-5 py-4 text-dark-900 outline-none focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-surface-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-semibold text-dark-900 ml-1">E-mail</label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        placeholder="joao@suafarmacia.com"
                        className="w-full bg-surface-50 border border-surface-200 rounded-3xl px-5 py-4 text-dark-900 outline-none focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-surface-400"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="whatsapp" className="text-sm font-semibold text-dark-900 ml-1">WhatsApp</label>
                      <input 
                        id="whatsapp"
                        type="tel" 
                        required
                        placeholder="(00) 00000-0000"
                        className="w-full bg-surface-50 border border-surface-200 rounded-3xl px-5 py-4 text-dark-900 outline-none focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all placeholder:text-surface-400"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="faturamento" className="text-sm font-semibold text-dark-900 ml-1">Faturamento atual</label>
                    <select 
                      id="faturamento"
                      title="Faturamento atual da farmácia"
                      required
                      className="w-full bg-surface-50 border border-surface-200 rounded-3xl px-5 py-4 text-dark-900 outline-none focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Selecione uma opção</option>
                      <option value="0">Ainda não inaugurei</option>
                      <option value="ate-100k">Até R$ 100 mil/mês</option>
                      <option value="100k-500k">R$ 100 mil a R$ 500 mil/mês</option>
                      <option value="500k-1m">R$ 500 mil a R$ 1 milhão/mês</option>
                      <option value="acima-1m">Acima de R$ 1 milhão/mês</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="objetivo" className="text-sm font-semibold text-dark-900 ml-1">Qual o seu objetivo principal?</label>
                    <select 
                      id="objetivo"
                      title="Qual o seu objetivo principal?"
                      required
                      value={motivo}
                      onChange={(e) => setMotivo(e.target.value)}
                      className="w-full bg-surface-50 border border-surface-200 rounded-3xl px-5 py-4 text-dark-900 outline-none focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Selecione um motivo</option>
                      <option value="abertura">Quero abrir uma farmácia</option>
                      <option value="troca">Quero trocar de contabilidade</option>
                      <option value="rede">Quero inteligência para rede</option>
                      <option value="outros">Outro assunto</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold py-4 px-8 rounded-3xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? 'Enviando...' : 'Falar com especialista'}
                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>

                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContatoFormulario;
