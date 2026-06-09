import { useState, useCallback, type ReactNode } from 'react';
import { ContextoModalRxSolucoes } from './contexto-modal-rx-solucoes';

export function ModalRxSolucoesProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ContextoModalRxSolucoes.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ContextoModalRxSolucoes.Provider>
    );
}
