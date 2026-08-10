import { type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

export default function ComboboxExample(): JSX.Element {
  const options: ComboboxOption[] = [
    { label: 'Agdenes', value: 'agdenes' },
    { label: 'Balestrand', value: 'balestrand' },
    { label: 'Finnøy', value: 'finnoy' },
    { label: 'Forsand', value: 'forsand' },
    { label: 'Grimstad', value: 'grimstad' },
    { label: 'Kristiansand', value: 'kristiansand' },
    { label: 'Kvalsund', value: 'kvalsund' },
    { label: 'Mandal', value: 'mandal' },
    { label: 'Meløy', value: 'meloy' },
    { label: 'Midsund', value: 'midsund' },
    { label: 'Nordre Flesberg Kommune', value: 'nordre_flesberg_kommune' },
    { label: 'Orkdal', value: 'orkdal' },
    { label: 'Rana', value: 'rana' },
    { label: 'Roller', value: 'roller' },
    { label: 'Sauda', value: 'sauda' },
    { label: 'Tromsø', value: 'tromso' },
    { label: 'Trondheim', value: 'trondheim' },
    { label: 'Vennesla', value: 'vennesla' },
    { label: 'Åmli', value: 'amli' },
  ];

  return <Combobox label={'Velg kommune'} options={options} />;
}
