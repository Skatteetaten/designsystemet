import { Meta, StoryObj } from '@storybook/react-vite';

import {
  getTabsPanelKeepMountedDefault,
  Tabs,
} from '@skatteetaten/ds-collections';

import { category } from '../../../.storybook/helpers';

const meta = {
  component: Tabs.Panel,
  title: 'Komponenter/Tabs/Panel',
  argTypes: {
    // Baseprops
    id: {
      description:
        // eslint-disable-next-line no-template-curly-in-string
        'Id til Tabs.Panel genereres automatisk for å sikre korrekt kobling til aria-controls i Tabs.Tab. Denne id-en kan ikke overskrives direkte. Ved å sette id på Tabs-komponenten, brukes den som base slik at id-en til Tabs.Panel blir *ds-tab-panel-${id Tabs}-${value Tabs.Panel}*.',
    },
    // Props
    children: { control: 'text', table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    keepMounted: {
      table: {
        category: category.props,
        defaultValue: { summary: getTabsPanelKeepMountedDefault().toString() },
      },
    },
  },
  args: {
    children: 'Innhold',
    value: 'random',
  },
} satisfies Meta<typeof Tabs.Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
