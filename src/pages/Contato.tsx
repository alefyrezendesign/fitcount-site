import ContatoHero from '../components/contato/ContatoHero';
import ContatoDores from '../components/contato/ContatoDores';
import ContatoFormulario from '../components/contato/ContatoFormulario';
import ContatoDireto from '../components/contato/ContatoDireto';
import ContatoMapa from '../components/contato/ContatoMapa';

const Contato = () => {
  return (
    <div className="bg-white min-h-screen relative overflow-hidden pt-[80px]">
      <ContatoHero />
      <ContatoDores />
      <ContatoFormulario />
      <ContatoDireto />
      <ContatoMapa />
    </div>
  );
};

export default Contato;
