import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

const options = [
  "Academia",
  "Cross training",
  "Estúdio de pilates",
  "Outro negócio fitness"
];

const PainelDiagnostico = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessType: '',
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    students: ''
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
    };
    window.addEventListener('open-painel-diagnostico', handleOpen);
    return () => window.removeEventListener('open-painel-diagnostico', handleOpen);
  }, []);

  const closePanel = () => {
    setIsOpen(false);
    setTimeout(() => {
      setStep(1);
      setFormData({
        businessType: '',
        name: '',
        company: '',
        whatsapp: '',
        email: '',
        students: ''
      });
    }, 300);
  };

  const handleSelectOption = (opt: string) => {
    setFormData(prev => ({ ...prev, businessType: opt }));
    setStep(2);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    // Submit logic here
    closePanel();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePanel}
            className="fixed inset-0 bg-dark-950/80 backdrop-blur-sm z-[100]"
          />

          {/* Slide-over Panel */}
          <m.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-md h-full bg-dark-900 border-l border-white/10 shadow-2xl z-[110] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                {step === 2 && (
                  <button onClick={() => setStep(1)} className="text-surface-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                  </button>
                )}
                <h3 className="text-xl font-bold text-white">Solicitar diagnóstico</h3>
              </div>
              <button onClick={closePanel} className="text-surface-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
              
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <m.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-2xl font-bold text-white mb-6">Qual é o seu tipo de negócio?</h4>
                    <div className="space-y-3">
                      {options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectOption(opt)}
                          className="w-full text-left px-6 py-4 rounded-2xl border border-white/10 hover:border-primary-500 hover:bg-primary-500/10 text-white font-medium transition-all group flex justify-between items-center"
                        >
                          {opt}
                          <ArrowRight size={18} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
                    </div>
                  </m.div>
                )}

                {step === 2 && (
                  <m.form
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col h-full"
                  >
                    <h4 className="text-2xl font-bold text-white mb-6">Dados para contato</h4>
                    
                    <div className="space-y-4 flex-1">
                      <div>
                        <label className="block text-sm font-medium text-surface-400 mb-1.5">Nome</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-400 mb-1.5">Empresa</label>
                        <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-400 mb-1.5">WhatsApp</label>
                        <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-400 mb-1.5">E-mail</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-surface-400 mb-1.5">Número aproximado de alunos</label>
                        <input required type="text" name="students" value={formData.students} onChange={handleChange} className="w-full bg-dark-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" />
                      </div>
                    </div>

                    <div className="mt-8">
                      <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl transition-colors">
                        Solicitar meu diagnóstico
                      </button>
                      <p className="text-xs text-surface-400 text-center mt-4">
                        Usaremos essas informações para entender o contexto inicial da sua operação.
                      </p>
                    </div>
                  </m.form>
                )}
              </AnimatePresence>

            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PainelDiagnostico;
