import { useContext } from 'react';
import { ContextoModalEspecialista } from '../context/contexto-modal-especialista';

export function useModalEspecialista() {
    const ctx = useContext(ContextoModalEspecialista);
    if (!ctx) throw new Error('useModalEspecialista must be used within ModalEspecialistaProvider');
    return ctx;
}
