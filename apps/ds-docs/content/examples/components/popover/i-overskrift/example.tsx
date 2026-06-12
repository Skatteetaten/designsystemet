import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

const contentText =
  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret bestar av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret star som regel pa et klistemerke i dorkarmen til inngangsdoren.';

export default function PopoverInHeadingExample(): ReactElement {
  const h3Id = 'popover-heading-h3';

  return (
    <>
      <div className={styles.row}>
        <Heading id={h3Id} as={'h3'}>
          {'Husk før du henter skattekortet'}
        </Heading>
        <Popover color={'ochre'} position={'bottomEnd'}>
          <Popover.Trigger ariaDescribedby={h3Id} size={'small'} />
          <Popover.Content>
            <Paragraph>{contentText}</Paragraph>
          </Popover.Content>
        </Popover>
      </div>
      <Paragraph>
        {
          'Smaller trigger kan egne seg når overskriften er mindre eller når du vil redusere visuell vekt i tett layout.'
        }
      </Paragraph>
    </>
  );
}
