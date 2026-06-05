import { useState, useCallback, type ReactNode } from 'react';
import { ContextoModalSolucoes } from './contexto-modal-solucoes';

export function SolutionsModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialInterest, setInitialInterest] = useState('');

    const openModal = useCallback((interest?: string) => {
        setInitialInterest(interest || '');
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setInitialInterest('');
    }, []);

    return (
        <ContextoModalSolucoes.Provider value={{ isOpen, initialInterest, openModal, closeModal }}>
            {children}
        </ContextoModalSolucoes.Provider>
    );
}


