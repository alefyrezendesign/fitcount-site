const fs = require('fs');
const path = require('path');

const fileReplacements = {
  'src/layouts/MainLayout.tsx': [
    { from: "'../components/MenuPrincipal'", to: "'../components/layout/MenuPrincipal'" },
    { from: "'../components/Rodape'", to: "'../components/layout/Rodape'" },
    { from: "'../components/BotaoFlutuante'", to: "'../components/layout/BotaoFlutuante'" },
    { from: "'../components/ModalParceiro'", to: "'../components/modals/ModalParceiro'" },
    { from: "'../components/ModalSolucoes'", to: "'../components/modals/ModalSolucoes'" },
    { from: "'../components/contato/ModalFalarEspecialista'", to: "'../components/modals/ModalFalarEspecialista'" },
    { from: "'../components/contato/ModalRxSolucoes'", to: "'../components/modals/ModalRxSolucoes'" }
  ],
  'src/pages/Home.tsx': [
    { from: "'../components/SecaoHero'", to: "'../components/home/SecaoHero'" },
    { from: "'../components/NumerosAutoridade'", to: "'../components/home/NumerosAutoridade'" },
    { from: "'../components/CarrosselParceiros'", to: "'../components/home/CarrosselParceiros'" },
    { from: "'../components/Beneficios'", to: "'../components/home/Beneficios'" },
    { from: "'../components/FraseImpactante'", to: "'../components/home/FraseImpactante'" },
    { from: "'../components/ResumoSolucoes'", to: "'../components/home/ResumoSolucoes'" },
    { from: "'../components/Demonstracao'", to: "'../components/home/Demonstracao'" },
    { from: "'../components/EcossistemaRx'", to: "'../components/home/EcossistemaRx'" },
    { from: "'../components/Depoimentos'", to: "'../components/home/Depoimentos'" },
    { from: "'../components/PerguntasFrequentes'", to: "'../components/home/PerguntasFrequentes'" },
    { from: "'../components/WorldScrollSequence'", to: "'../components/home/WorldScrollSequence'" },
    { from: "'../components/AnalisesRx'", to: "'../components/home/AnalisesRx'" }
  ],
  'src/components/home/AnalisesRx.tsx': [
    { from: "'../hooks/useModalSolucoes'", to: "'../../hooks/useModalSolucoes'" },
    { from: "'./ui/AnimatedTitle'", to: "'../ui/AnimatedTitle'" }
  ],
  'src/components/home/Beneficios.tsx': [
    { from: "'./ui/SectionHeader'", to: "'../ui/SectionHeader'" }
  ],
  'src/components/home/Depoimentos.tsx': [
    { from: "'./ui/SectionHeader'", to: "'../ui/SectionHeader'" }
  ],
  'src/components/home/EcossistemaRx.tsx': [
    { from: "'../hooks/useModalRxSolucoes'", to: "'../../hooks/useModalRxSolucoes'" }
  ],
  'src/components/home/NumerosAutoridade.tsx': [
    { from: "'./ui/SectionHeader'", to: "'../ui/SectionHeader'" }
  ],
  'src/components/home/PerguntasFrequentes.tsx': [
    { from: "'../hooks/useModalEspecialista'", to: "'../../hooks/useModalEspecialista'" },
    { from: "'./ui/SectionHeader'", to: "'../ui/SectionHeader'" }
  ],
  'src/components/home/ResumoSolucoes.tsx': [
    { from: "'./ui/AnimatedTitle'", to: "'../ui/AnimatedTitle'" }
  ],
  'src/components/home/SecaoHero.tsx': [
    { from: "'../hooks/useModalSolucoes'", to: "'../../hooks/useModalSolucoes'" },
    { from: "'../hooks/useModalEspecialista'", to: "'../../hooks/useModalEspecialista'" },
    { from: "'./ui/AnimatedTitle'", to: "'../ui/AnimatedTitle'" }
  ],
  'src/components/layout/BotaoFlutuante.tsx': [
    { from: "'../hooks/useModalEspecialista'", to: "'../../hooks/useModalEspecialista'" },
    { from: "'../hooks/useModalRxSolucoes'", to: "'../../hooks/useModalRxSolucoes'" }
  ],
  'src/components/layout/MenuPrincipal.tsx': [
    { from: "'../hooks/useModalSolucoes'", to: "'../../hooks/useModalSolucoes'" }
  ],
  'src/components/modals/ModalFalarEspecialista.tsx': [
    { from: "'./RDStationGhostForm'", to: "'../contato/RDStationGhostForm'" }
  ],
  'src/components/modals/ModalParceiro.tsx': [
    { from: "'../hooks/useModalParceiro'", to: "'../../hooks/useModalParceiro'" }
  ],
  'src/components/modals/ModalRxSolucoes.tsx': [
    { from: "'./RDStationGhostForm'", to: "'../contato/RDStationGhostForm'" }
  ],
  'src/components/modals/ModalSolucoes.tsx': [
    { from: "'../hooks/useModalSolucoes'", to: "'../../hooks/useModalSolucoes'" },
    { from: "'./contato/RDStationGhostForm'", to: "'../contato/RDStationGhostForm'" }
  ],
  'src/components/sobre/SobreHero.tsx': [
    { from: "'../FundoCodigoHero'", to: "'../home/FundoCodigoHero'" }
  ]
};

Object.entries(fileReplacements).forEach(([filePath, replacements]) => {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  replacements.forEach(r => {
    content = content.replace(new RegExp(r.from, 'g'), r.to);
  });
  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${filePath}`);
});
