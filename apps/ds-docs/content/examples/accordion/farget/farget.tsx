import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';

import styles from './styles.module.scss';

export default function FargetAccordionExample(): JSX.Element {
  return (
    <Accordion color={'denim'} className={styles.accordion}>
      <Accordion.Item title={'Frister for levering'} isDefaultExpanded>
        {
          'Bruk en farget variant når seksjonen trenger ekstra synlighet i en side med mange andre elementer.'
        }
      </Accordion.Item>
      <Accordion.Item title={'Dokumentasjon du må ha klar'}>
        {
          'Samle vedlegg og opplysninger pa forhånd for å gjøre innsendingen enklere for brukeren.'
        }
      </Accordion.Item>
    </Accordion>
  );
}
