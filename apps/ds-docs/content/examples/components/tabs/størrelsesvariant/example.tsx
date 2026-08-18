import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsSizeVariantExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'standard-1'} variant={'standard'}>
        <Tabs.List>
          <Tabs.Tab value={'standard-1'}>{'Oversikt'}</Tabs.Tab>
          <Tabs.Tab value={'standard-2'}>{'Innboks'}</Tabs.Tab>
          <Tabs.Tab value={'standard-3'}>{'Historikk'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'standard-1'}>{'Innhold for standard.'}</Tabs.Panel>
        <Tabs.Panel value={'standard-2'}>{'Innhold for standard.'}</Tabs.Panel>
        <Tabs.Panel value={'standard-3'}>{'Innhold for standard.'}</Tabs.Panel>
      </Tabs>

      <Tabs defaultValue={'compact-1'} variant={'compact'}>
        <Tabs.List>
          <Tabs.Tab value={'compact-1'}>{'Oversikt'}</Tabs.Tab>
          <Tabs.Tab value={'compact-2'}>{'Innboks'}</Tabs.Tab>
          <Tabs.Tab value={'compact-3'}>{'Historikk'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'compact-1'}>{'Innhold for compact.'}</Tabs.Panel>
        <Tabs.Panel value={'compact-2'}>{'Innhold for compact.'}</Tabs.Panel>
        <Tabs.Panel value={'compact-3'}>{'Innhold for compact.'}</Tabs.Panel>
      </Tabs>
    </div>
  );
}
