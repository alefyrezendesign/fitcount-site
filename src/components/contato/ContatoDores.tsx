import { motion } from 'framer-motion';
import { Store, RefreshCw, Network } from 'lucide-react';

const dores = [
  {
    id: "abertura",
    title: "Quero abrir uma farmácia",
    description: "Preciso de orientação societária, tributária e passos iniciais para inaugurar com segurança.",
    icon: <Store size={24} />
  },
  {
    id: "troca",
    title: "Quero trocar de contabilidade",
    description: "Minha contabilidade atual não entende do varejo farmacêutico e sinto que estou perdendo dinheiro.",
    icon: <RefreshCw size={24} />
  },
  {
    id: "rede",
    title: "Quero inteligência para rede",
    description: "Já possuo múltiplas lojas e preciso de otimização tributária avançada e gestão de holding.",
    icon: <Network size={24} />
  }
];

const ContatoDores = () => {
  const handleSelect = (id: string) => {
    // We will use URL parameters or just scroll to the form.
    // Assuming the form has ID 'formulario-contato'
    const formElement = document.getElementById('formulario-contato');
    if (formElement) {
      // Small delay to allow potential state updates if needed, though here we just scroll
      setTimeout(() => {
        formElement.scrollIntoView({ behavior: 'smooth' });
        
        // Custom event to tell the form to select this option
        const event = new CustomEvent('selectContatoMotivo', { detail: { motivo: id } });
        window.dispatchEvent(event);
      }, 100);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-50 relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark-900 tracking-tight"
          >
            Qual é o seu momento?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dores.map((dor, idx) => (
            <motion.button
              key={dor.id}
              onClick={() => handleSelect(dor.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group text-left bg-white p-8 rounded-3xl border border-surface-200 shadow-sm hover:border-primary-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {dor.icon}
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                {dor.title}
              </h3>
              <p className="text-surface-600 text-sm md:text-base leading-relaxed">
                {dor.description}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContatoDores;
