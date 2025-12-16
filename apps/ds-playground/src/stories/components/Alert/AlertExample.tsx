import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';

const AlertExample = (): JSX.Element => {
  return (
    <>
      <Alert variant={'info'} className={'bottomSpacingXL'} showAlert>
        {
          'Disse feltene er låst for redigering fordi du har fått et varsel fra oss'
        }
      </Alert>
      <Alert variant={'success'} className={'bottomSpacingXL'} showAlert>
        {'Filen ble lastet opp'}
      </Alert>

      <Alert variant={'warning'} className={'bottomSpacingXL'} showAlert>
        {
          'Det finnes feil i kjøretøydata. Sjekk at dette ikke har avgiftsmessige konsekvenser.'
        }
      </Alert>
      <Alert variant={'error'} className={'bottomSpacingXL'} showAlert>
        {
          'Avvist av kortutsteder. Ta kontakt med kortutsteder for mer informasjon.'
        }
      </Alert>
      <Alert variant={'danger'} showAlert>
        {'Strengt fortrolig (Kode 6)'}
      </Alert>
    </>
  );
};

export default AlertExample;
