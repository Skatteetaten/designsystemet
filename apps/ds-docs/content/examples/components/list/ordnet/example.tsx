import { List } from '@skatteetaten/ds-typography';

export default function ListOrderedStateExample(): JSX.Element {
  return (
    <List as={'ol'}>
      <List.Element>{'Kontroller personopplysninger'}</List.Element>
      <List.Element>{'Legg til vedlegg'}</List.Element>
      <List.Element>{'Send inn skjema'}</List.Element>
    </List>
  );
}
