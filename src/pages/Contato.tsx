import ContatoHero from '../components/contato/ContatoHero';
import ContatoMapa from '../components/contato/ContatoMapa';

const Contato = () => {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden pt-[80px]">
      <ContatoHero />
      <ContatoMapa />
    </div>
  );
};

export default Contato;
