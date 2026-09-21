import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { Heading } from '@skatteetaten/ds-typography';

export default function CardWithAlertStateExample(): JSX.Element {
  return (
    <Card color={'white'} spacing={'m'}>
      <Card.Alert
        variant={'warning'}
        title={'Frist nærmer seg'}
        showAlert
        onClose={() => undefined}
      >
        {
          'Fristen for å levere er 30. april. Sørg for at alle opplysninger er riktige.'
        }
      </Card.Alert>
      <Card.Header>
        <Heading as={'h3'}>{'Skattemelding 2026'}</Heading>
      </Card.Header>
      <Card.Content>
        {'Kontroller opplysningene dine og send inn skattemeldingen.'}
      </Card.Content>
      <Card.Actions>
        <Button href={'#'}>{'Gå til skattemeldingen'}</Button>
      </Card.Actions>
    </Card>
  );
}
