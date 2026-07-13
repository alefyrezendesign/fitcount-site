import SecaoHero from '../components/home/SecaoHero';
import FraseImpactante from '../components/home/FraseImpactante';
import SecaoFotoFrase from '../components/home/SecaoFotoFrase';
import NumerosAutoridade from '../components/home/NumerosAutoridade';
import EvolucaoMercado from '../components/home/EvolucaoMercado';
import AnalisesRx from '../components/home/AnalisesRx';
import FaixaTransicao from '../components/home/FaixaTransicao';
import ParallaxImpacto from '../components/home/ParallaxImpacto';
import ResumoSolucoes from '../components/home/ResumoSolucoes';
import EcossistemaRx from '../components/home/EcossistemaRx';
import Depoimentos from '../components/home/Depoimentos';
import PainelDiagnostico from '../components/layout/PainelDiagnostico';

const Home = () => {
  return (
    <>
      <SecaoHero />
      <FraseImpactante />
      <SecaoFotoFrase />
      <NumerosAutoridade />
      <EvolucaoMercado />
      
      <FaixaTransicao />

      {/* Rx Análises */}
      <AnalisesRx />

      <ParallaxImpacto />
      <ResumoSolucoes />
      
      {/* Rx Soluções (mantida exatamente como é) */}
      <div id="rx-solucoes" className="relative z-30 w-full shrink-0 flex items-center justify-center">
        <EcossistemaRx />
      </div>

      <Depoimentos />
      <PainelDiagnostico />
    </>
  );
};

export default Home;
