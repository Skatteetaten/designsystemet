import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsWithBorderExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'tab-1'} hasBorder>
        <Tabs.List>
          <Tabs.Tab value={'tab-1'}>{'Personopplysninger'}</Tabs.Tab>
          <Tabs.Tab value={'tab-2'}>{'Kontaktinformasjon'}</Tabs.Tab>
          <Tabs.Tab value={'tab-3'}>{'Betaling'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab-1'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab-2'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab-3'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
