import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsMultilineExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'tab-1'} isMultiline>
        <Tabs.List>
          <Tabs.Tab value={'tab-1'}>
            {'Dokumenter med lang tittel for mobilvisning'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab-2'}>
            {'Meldinger med lang tittel for mobilvisning'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab-3'}>
            {'Historikk med lang tittel for mobilvisning'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab-1'}>{'Innhold for dokumenter.'}</Tabs.Panel>
        <Tabs.Panel value={'tab-2'}>{'Innhold for meldinger.'}</Tabs.Panel>
        <Tabs.Panel value={'tab-3'}>{'Innhold for historikk.'}</Tabs.Panel>
      </Tabs>
    </div>
  );
}
