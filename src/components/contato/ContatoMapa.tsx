import { m } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import { TypewriterBadge } from '../ui/TypewriterBadge';

const unidades = [
  { cidade: "Itaboraí", estado: "RJ", pais: "Brasil", flagCode: "br" },
  { cidade: "Rio de Janeiro", estado: "RJ", pais: "Brasil", flagCode: "br" },
  { cidade: "Goiânia", estado: "GO", pais: "Brasil", flagCode: "br" },
  { cidade: "Curitiba", estado: "PR", pais: "Brasil", flagCode: "br" },
  { cidade: "Lisboa", estado: "", pais: "Portugal", flagCode: "pt" },
];

const ContatoMapa = () => {
  return (
    <section className="py-24 lg:py-32 bg-transparent relative">
      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl">
        
        {/* Title */}
        <div className="text-center mb-12 flex flex-col items-center">
          <div className="mb-4">
             <TypewriterBadge text="Nossas Unidades" icon={<Building2 size={16} />} className="bg-dark-900 border-white/10 text-white" />
          </div>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Onde estamos
          </m.h2>
        </div>

        {/* Global Presence */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
            {unidades.map((loc, i) => (
              <div 
                key={i}
                className="flex items-center p-4 md:p-8 bg-dark-900 border border-white/10 rounded-[20px] md:rounded-[24px] shadow-sm"
              >
                <div className="relative shrink-0 mr-4 md:mr-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 shadow-sm bg-primary-500/20 flex items-center justify-center text-primary-400">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 stroke-[2]" />
                  </div>
                  {/* Small visual element: Flag */}
                  <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-7 h-7 md:w-9 md:h-9 bg-dark-900 rounded-full shadow-sm border-[2px] md:border-[3px] border-dark-900 overflow-hidden flex items-center justify-center">
                    <img 
                      src={`https://flagcdn.com/w40/${loc.flagCode}.png`} 
                      alt={`Bandeira ${loc.pais}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 text-left">
                  <h4 className="font-extrabold text-white text-[17px] md:text-2xl mb-0.5 md:mb-1">
                    {loc.cidade}
                  </h4>
                  <span className="font-medium text-gray-400 text-[13px] md:text-base">
                    {loc.estado ? `${loc.estado} • ${loc.pais}` : loc.pais}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </m.div>

      </div>
    </section>
  );
};

export default ContatoMapa;
