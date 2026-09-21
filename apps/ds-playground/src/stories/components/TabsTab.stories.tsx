import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

import { Tabs } from '@skatteetaten/ds-collections';
import { BriefcaseSVGpath } from '@skatteetaten/ds-icons';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';

const meta = {
  component: Tabs.Tab,
  title: 'Komponenter/Tabs/Tab',
  argTypes: {
    // Baseprops
    id: {
      description:
        // eslint-disable-next-line no-template-curly-in-string
        'Id til Tabs.Tab genereres automatisk for å sikre korrekt kobling til aria-labelledby i Tabs.Panel. Denne id-en kan ikke overskrives direkte. Ved å sette id på Tabs-komponenten, brukes den som base slik at id-en til Tabs.Tab blir *ds-tab-id-${id Tabs}-${value Tabs.Tab}*.',
    },
    // Props
    children: { control: 'text', table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    value: { control: 'text', table: { category: category.props } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: 'Person',
    value: 'tab1',
  },
} satisfies Meta<typeof Tabs.Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsTabTemplate: StoryFn<typeof Tabs.Tab> = (args) => (
  <Tabs defaultValue={args.value}>
    <Tabs.List key={'list1'}>
      <Tabs.Tab {...args} />
      <Tabs.Tab value={'tab2'} svgPath={BriefcaseSVGpath}>
        {'Bedrift'}
      </Tabs.Tab>
    </Tabs.List>
  </Tabs>
);

export const Preview: Story = {
  render: TabsTabTemplate,
} satisfies Story;
