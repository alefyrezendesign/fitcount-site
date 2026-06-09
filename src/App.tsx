import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Lazy loading das páginas para code-splitting
const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Contato = lazy(() => import('./pages/Contato'));

// Modal Providers
import { PartnerModalProvider } from './context/ContextoModalParceiro';
import { SolutionsModalProvider } from './context/ContextoModalSolucoes';
import { ModalEspecialistaProvider } from './context/ContextoModalEspecialista';
import { ModalRxSolucoesProvider } from './context/ContextoModalRxSolucoes';

// Tela de carregamento global super leve
const GlobalLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <ModalEspecialistaProvider>
      <SolutionsModalProvider>
        <ModalRxSolucoesProvider>
          <PartnerModalProvider>
            <LazyMotion features={domAnimation} strict>
              <BrowserRouter>
                <Suspense fallback={<GlobalLoader />}>
                  <Routes>
                    <Route path="/" element={<MainLayout />}>
                      <Route index element={<Home />} />
                      <Route path="sobre" element={<Sobre />} />
                      <Route path="contato" element={<Contato />} />
                    </Route>
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </LazyMotion>
          </PartnerModalProvider>
        </ModalRxSolucoesProvider>
      </SolutionsModalProvider>
    </ModalEspecialistaProvider>
  );
};

export default App;
