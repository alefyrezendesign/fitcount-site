import { useImperativeHandle, forwardRef } from 'react';

export interface RDStationGhostFormRef {
  submitForm: (data: Record<string, string>) => Promise<void>;
}

interface Props {
  formId: string;
}

// Token público da conta RD Station extraído das URLs de conversão
const RD_TOKEN = '746f8889c28e428d94d1e60633d1f883';

export const RDStationGhostForm = forwardRef<RDStationGhostFormRef, Props>(({ formId }, ref) => {
  useImperativeHandle(ref, () => ({
    submitForm: async (data: Record<string, string>) => {
      try {
        // Extrai o identificador de conversão do ID do form (remove o hash final)
        // Ex: fitcount-falar-com-especialista -> fitcount-falar-com-especialista
        const conversionIdentifier = formId.split('-').slice(0, -1).join('-');

        const body = new URLSearchParams();
        body.append('token_rdstation', RD_TOKEN);
        body.append('identificador', conversionIdentifier);
        
        // Campos de segurança e rastreamento da RD Station
        body.append('c_utmz', '');
        body.append('traffic_source', '');
        body.append('client_id', '');
        body.append('_doe', '');
        body.append('privacy_data[browser]', navigator.userAgent);
        body.append('emP7yF13ld', '');
        body.append('sh0uldN07ch4ng3', 'should_not_change');

        Object.entries(data).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                body.append(key, value.toString());
            }
        });

        // Endpoint da API 1.2 que NUNCA redireciona (Headless oficial da RD)
        await fetch('https://www.rdstation.com.br/api/1.2/conversions', {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body.toString(),
        });

        // Dá um pequeno delay artificial para o loading ficar suave na interface
        await new Promise(r => setTimeout(r, 800));

        return Promise.resolve();
      } catch (err) {
        console.error('[RD Station Headless Error]', err);
        return Promise.reject(err);
      }
    }
  }));

  // Como agora é 100% via API (Headless), não precisamos renderizar nenhum script ou div fantasma!
  return null;
});
