import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

export default function TabsStandardValuesExample(): ReactElement {
  return (
    <Tabs defaultValue={'tab-1'}>
      <Tabs.List>
        <Tabs.Tab value={'tab-1'}>{'Oversikt'}</Tabs.Tab>
        <Tabs.Tab value={'tab-2'}>{'Meldinger'}</Tabs.Tab>
        <Tabs.Tab value={'tab-3'}>{'Historikk'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab-1'}>
        {'Innhold for oversikt med standardverdier.'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab-2'}>
        {'Innhold for meldinger med standardverdier.'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab-3'}>
        {'Innhold for historikk med standardverdier.'}
      </Tabs.Panel>
    </Tabs>
  );
}
