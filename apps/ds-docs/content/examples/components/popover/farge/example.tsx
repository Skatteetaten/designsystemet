import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

export default function PopoverColorExample(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'White'}
        </Heading>
        <Popover color={'white'}>
          <Popover.Trigger title={'Vis white-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Nøytral bakgrunn for standard hjelpetekster.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>

      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'Ochre'}
        </Heading>
        <Popover color={'ochre'}>
          <Popover.Trigger title={'Vis ochre-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Fremhever viktig kontekst uten å dominere siden.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>

      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'Forest'}
        </Heading>
        <Popover color={'forest'}>
          <Popover.Trigger title={'Vis forest-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Kan brukes for å markere veiledning i grønn tone.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>
    </div>
  );
}
