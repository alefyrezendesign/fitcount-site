import { useContext } from 'react';
import { ContextoModalSolucoes } from '../context/contexto-modal-solucoes';

export function useModalSolucoes() {
    const ctx = useContext(ContextoModalSolucoes);
    if (!ctx) throw new Error('useModalSolucoes must be used within SolutionsModalProvider');
    return ctx;
}

