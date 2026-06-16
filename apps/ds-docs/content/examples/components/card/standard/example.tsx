import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { Tag } from '@skatteetaten/ds-status';
import { Heading } from '@skatteetaten/ds-typography';

export default function CardPreviewStateExample(): JSX.Element {
  return (
    <Card color={'graphite'}>
      <Card.Header rightContent={<Tag>{'Status'}</Tag>}>
        <Heading as={'h3'}>{'Tittel på kortet'}</Heading>
      </Card.Header>
      <Card.Content>
        {'Alle som har laget en nettside, trengt litt fylltekst eller bare'}
        {
          'surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt'
        }
        {
          'av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.'
        }
      </Card.Content>
      <Card.Actions>
        <Button href={'#'}>{'Gå til tjenesten'}</Button>
      </Card.Actions>
    </Card>
  );
}
