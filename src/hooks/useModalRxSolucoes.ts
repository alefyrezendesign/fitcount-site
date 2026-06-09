import { useContext } from 'react';
import { ContextoModalRxSolucoes } from '../context/contexto-modal-rx-solucoes';

export function useModalRxSolucoes() {
    const ctx = useContext(ContextoModalRxSolucoes);
    if (!ctx) throw new Error('useModalRxSolucoes must be used within ModalRxSolucoesProvider');
    return ctx;
}
