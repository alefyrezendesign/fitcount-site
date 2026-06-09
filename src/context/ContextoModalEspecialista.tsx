import { useState, useCallback, type ReactNode } from 'react';
import { ContextoModalEspecialista } from './contexto-modal-especialista';

export function ModalEspecialistaProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialMomento, setInitialMomento] = useState<string>('');

    const openModal = useCallback((momento?: string) => {
        setInitialMomento(momento || '');
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <ContextoModalEspecialista.Provider value={{ isOpen, initialMomento, openModal, closeModal }}>
            {children}
        </ContextoModalEspecialista.Provider>
    );
}
