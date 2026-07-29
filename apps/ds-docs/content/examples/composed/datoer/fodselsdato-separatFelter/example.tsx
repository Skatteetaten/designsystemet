import { type JSX, useState } from 'react';

import { Fieldset, TextField } from '@skatteetaten/ds-forms';

import styles from './FodselsdatoSeparateFelter.module.scss';

export default function FodselsdatoSeparateFelterExample(): JSX.Element {
  const [dag, setDag] = useState('');
  const [maned, setManed] = useState('');
  const [ar, setAr] = useState('');

  const handleDagChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setDag(value);
    }
  };

  const handleManedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setManed(value);
    }
  };

  const handleArChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      setAr(value);
    }
  };

  return (
    <Fieldset
      legend={'Fødselsdato'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
      hideLegend
    >
      <TextField
        label={'Dag'}
        value={dag}
        maxLength={2}
        classNames={{
          textbox: styles.fieldSmall,
        }}
        onChange={handleDagChange}
      />
      <TextField
        label={'Måned'}
        value={maned}
        maxLength={2}
        classNames={{
          textbox: styles.fieldSmall,
        }}
        onChange={handleManedChange}
      />
      <TextField
        label={'År'}
        value={ar}
        maxLength={4}
        classNames={{
          textbox: styles.fieldMedium,
        }}
        onChange={handleArChange}
      />
    </Fieldset>
  );
}
