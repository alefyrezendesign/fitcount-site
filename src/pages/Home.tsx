import { lazy, Suspense, useRef } from 'react';
import { useScroll } from 'framer-motion';
import SecaoHero from '../components/SecaoHero';
import NumerosAutoridade from '../components/NumerosAutoridade';
import CarrosselParceiros from '../components/CarrosselParceiros';
import Beneficios from '../components/Beneficios';
import FraseImpactante from '../components/FraseImpactante';
import ResumoSolucoes from '../components/ResumoSolucoes';
import Demonstracao from '../components/Demonstracao';
import EcossistemaRx from '../components/EcossistemaRx';
import Depoimentos from '../components/Depoimentos';
import PerguntasFrequentes from '../components/PerguntasFrequentes';
import WorldScrollSequence from '../components/WorldScrollSequence';

const RxDiagnosis = lazy(() => import('../components/AnalisesRx'));

const SectionSkeleton = () => <div className="min-h-[400px] bg-white border-b border-surface-100" />;

const Home = () => {
  const sequenceContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: sequenceProgress } = useScroll({
    target: sequenceContainerRef,
    offset: ["start end", "end start"]
  });

  return (
    <>
      <SecaoHero />

      <div className="relative z-20 -mt-[100vh] h-screen w-full shrink-0">
        <NumerosAutoridade />
      </div>

      <div ref={sequenceContainerRef} className="relative w-full bg-white flex flex-col items-center">
        <div className="relative z-10 w-full shrink-0">
          <Beneficios />
        </div>

        {/* Globe sequence positioned in normal flow but with negative margin to overlap sections */}
        <div className="relative z-0 w-full flex justify-center -mt-20 md:-mt-40 lg:-mt-64 mb-10">
          <WorldScrollSequence progress={sequenceProgress} />
        </div>

        <div className="relative z-10 w-full shrink-0 -mt-20 md:-mt-32 lg:-mt-60">
          <Suspense fallback={<SectionSkeleton />}>
            <RxDiagnosis />
          </Suspense>
        </div>
      </div>

      <div className="w-full shrink-0 bg-white pt-10 md:pt-16 lg:pt-20">
        <FraseImpactante />
      </div>

      <div className="w-full shrink-0 h-[350vh]">
        <Demonstracao />
      </div>

      <div className="relative z-20 -mt-[100vh] w-full shrink-0 bg-white">
        <ResumoSolucoes />
      </div>

      <div id="rx-solucoes-wrapper" className="w-full shrink-0 flex items-center justify-center bg-[#0a0a0a]">
        <EcossistemaRx />
      </div>

      <div className="w-full shrink-0 bg-white">
        <Depoimentos />
      </div>

      <div className="w-full shrink-0 bg-white">
        <CarrosselParceiros />
      </div>

      <div className="w-full shrink-0 bg-white">
        <PerguntasFrequentes />
      </div>
    </>
  );
};

export default Home;
