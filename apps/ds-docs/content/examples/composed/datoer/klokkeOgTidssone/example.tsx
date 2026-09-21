import { type JSX, useState } from 'react';

import {
  Combobox,
  Fieldset,
  Select,
  TextField,
  type ComboboxOption,
} from '@skatteetaten/ds-forms';

import styles from './KlokkeOgTidssone.module.scss';

export default function KlokkeOgTidssoneExample(): JSX.Element {
  const [tid, setTid] = useState('');
  const [ampm, setAmpm] = useState('AM');
  const [tidssone, setTidssone] = useState('');

  const handleTidChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 2) {
      value = `${value.slice(0, 2)}:${value.slice(2, 4)}`;
    }

    setTid(value);
  };

  const tidssonerOptions: ComboboxOption[] = [
    { label: 'Europe/Oslo, Norway (GMT+1)', value: 'Europe/Oslo' },
    { label: 'Europe/London, United Kingdom (GMT+0)', value: 'Europe/London' },
    { label: 'Europe/Paris, France (GMT+1)', value: 'Europe/Paris' },
    { label: 'Europe/Berlin, Germany (GMT+1)', value: 'Europe/Berlin' },
    { label: 'America/New_York, USA (GMT-5)', value: 'America/New_York' },
    { label: 'America/Los_Angeles, USA (GMT-8)', value: 'America/Los_Angeles' },
    { label: 'Asia/Tokyo, Japan (GMT+9)', value: 'Asia/Tokyo' },
    { label: 'Asia/Shanghai, China (GMT+8)', value: 'Asia/Shanghai' },
    {
      label: 'Australia/Sydney, Australia (GMT+10)',
      value: 'Australia/Sydney',
    },
    {
      label: 'Pacific/Auckland, New Zealand (GMT+12)',
      value: 'Pacific/Auckland',
    },
  ];

  return (
    <Fieldset
      legend={'Klokkeslett og tidssone'}
      classNames={{
        contentContainer: styles.fieldContainer,
      }}
    >
      <TextField
        label={'Tid (hh:mm)'}
        value={tid}
        maxLength={5}
        classNames={{
          textbox: styles.timeInput,
        }}
        onChange={handleTidChange}
      />

      <Select
        label={'AM/PM'}
        value={ampm}
        classNames={{
          container: styles.fieldSelectSmall,
        }}
        onChange={(e): void => setAmpm(e.target.value)}
      >
        <Select.Option value={'AM'}>{'AM'}</Select.Option>
        <Select.Option value={'PM'}>{'PM'}</Select.Option>
      </Select>

      <Combobox
        label={'Tidssone'}
        options={tidssonerOptions}
        value={tidssone}
        onSelectionChange={(option): void => setTidssone(option?.value || '')}
      />
    </Fieldset>
  );
}
