import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'baerum', label: 'Bærum', group: 'Akershus' },
  { value: 'lillestrom', label: 'Lillestrøm', group: 'Akershus' },
  { value: 'as', label: 'Ås', group: 'Akershus' },
  { value: 'bergen', label: 'Bergen', group: 'Vestland' },
  { value: 'sogndal', label: 'Sogndal', group: 'Vestland' },
  { value: 'askoy', label: 'Askøy', group: 'Vestland' },
  { value: 'trondheim', label: 'Trondheim', group: 'Trøndelag' },
  { value: 'stjordal', label: 'Stjørdal', group: 'Trøndelag' },
  { value: 'levanger', label: 'Levanger', group: 'Trøndelag' },
];

export default function ComboboxGroupedOptionsStateExample(): JSX.Element {
  return <Combobox label={'Kommune'} options={options} />;
}
