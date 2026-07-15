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
      <div id="autoridade">
        <NumerosAutoridade />
      </div>
      <EvolucaoMercado />
      
      <FaixaTransicao />

      {/* Rx Análises */}
      <div id="rx-analises">
        <AnalisesRx />
      </div>

      <div id="gestao">
        <ParallaxImpacto />
      </div>
      
      <div id="rx-solucoes" className="relative z-30 w-full">
        <ResumoSolucoes />
        <EcossistemaRx />
      </div>

      <div id="depoimentos">
        <Depoimentos />
      </div>
      <PainelDiagnostico />
    </>
  );
};

export default Home;
