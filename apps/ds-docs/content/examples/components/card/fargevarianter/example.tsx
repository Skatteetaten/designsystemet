import { Card } from '@skatteetaten/ds-content';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function CardColorsStateExample(): JSX.Element {
  return (
    <div className={styles.cardColors}>
      {(
        ['white', 'ochre', 'forest', 'burgundy', 'denim', 'graphite'] as const
      ).map((color) => (
        <Card key={color} color={color} spacing={'s'}>
          <Card.Header>
            <Heading as={'h3'}>{color}</Heading>
          </Card.Header>
          <Card.Content>
            {'Eksempel på Card med farge '}
            <strong>{color}</strong>
            {'.'}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
