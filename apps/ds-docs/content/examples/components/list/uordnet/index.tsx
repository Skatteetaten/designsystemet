import { List } from '@skatteetaten/ds-typography';

export default function ListUnorderedStateExample(): JSX.Element {
  return (
    <List>
      <List.Element>{'Skatteoppgjør'}</List.Element>
      <List.Element>{'Skattekort'}</List.Element>
      <List.Element>{'Meldinger'}</List.Element>
    </List>
  );
}
