import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'akershus', label: 'Akershus' },
  { value: 'buskerud', label: 'Buskerud' },
  { value: 'finnmark', label: 'Finnmark' },
  { value: 'innlandet', label: 'Innlandet' },
  { value: 'møre-og-romsdal', label: 'Møre og Romsdal' },
  { value: 'nordland', label: 'Nordland' },
  { value: 'oslo', label: 'Oslo' },
  { value: 'rogaland', label: 'Rogaland' },
  { value: 'telemark', label: 'Telemark' },
  { value: 'troms', label: 'Troms' },
  { value: 'trøndelag', label: 'Trøndelag' },
  { value: 'vestfold', label: 'Vestfold' },
  { value: 'østfold', label: 'Østfold' },
  { value: 'vestland', label: 'Vestland' },
  { value: 'agder', label: 'Agder' },
];

export default function ComboboxPreviewStateExample(): JSX.Element {
  return <Combobox label={'Fylke'} options={options} />;
}
