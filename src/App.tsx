import { LazyMotion, domAnimation } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

// Modal Providers
import { PartnerModalProvider } from './context/ContextoModalParceiro';
import { SolutionsModalProvider } from './context/ContextoModalSolucoes';

const App = () => {
  return (
    <SolutionsModalProvider>
      <PartnerModalProvider>
        <LazyMotion features={domAnimation} strict>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="contato" element={<Contato />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </LazyMotion>
      </PartnerModalProvider>
    </SolutionsModalProvider>
  );
};

export default App;

