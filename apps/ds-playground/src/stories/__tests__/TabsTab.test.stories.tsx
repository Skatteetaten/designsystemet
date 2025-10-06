import { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { expect, within } from 'storybook/test';

import { Tabs } from '@skatteetaten/ds-collections';
import {
  DeploySVGpath,
  LockSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';

const meta = {
  component: Tabs.Tab,
  title: 'Tester/Tabs/Tab',
  argTypes: {
    // Baseprops
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    svgPath: { table: { disable: true } },
    value: { table: { disable: true } },
  },
  tags: ['test'],
  parameters: {
    imageSnapshot: { disableSnapshot: false },
  },
} satisfies Meta<typeof Tabs.Tab>;
export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  children: 'Person',
};

const TemplateTabs: StoryFn<typeof Tabs.Tab> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Tab {...args} value={'tab1'}>
          {'Person'}
        </Tabs.Tab>
        <Tabs.Tab {...args} value={'tab2'}>
          {'Bedrift'}
        </Tabs.Tab>
        <Tabs.Tab {...args} value={'tab3'}>
          {'Astronaut'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
      <Tabs.Panel value={'tab3'}>{'Tabs.Panel Astronaut'}</Tabs.Panel>
    </Tabs>
  );
};

const TemplateTabsTab: StoryFn<typeof Tabs.Tab> = (args) => {
  return (
    <Tabs defaultValue={'tab1'}>
      <Tabs.List>
        <Tabs.Tab {...args}>{args.children}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Bedrift'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
    </Tabs>
  );
};

const TemplateTabsIcon: StoryFn<typeof Tabs.Tab> = (args) => {
  return (
    <>
      <Tabs defaultValue={'tab1'}>
        <Tabs.List>
          <Tabs.Tab {...args}>{args.children}</Tabs.Tab>
          <Tabs.Tab {...args} svgPath={LockSVGpath} value={'tab2'}>
            {'Bedrift'}
          </Tabs.Tab>
          <Tabs.Tab {...args} svgPath={DeploySVGpath} value={'tab3'}>
            {'Astronaut'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
        <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
        <Tabs.Panel value={'tab3'}>{'Tabs.Panel Astronaut'}</Tabs.Panel>
      </Tabs>

      <Tabs defaultValue={'tab1'} variant={'compact'}>
        <Tabs.List>
          <Tabs.Tab {...args}>{'Person 2'}</Tabs.Tab>
          <Tabs.Tab {...args} svgPath={LockSVGpath} value={'tab2'}>
            {'Bedrift 2'}
          </Tabs.Tab>
          <Tabs.Tab {...args} svgPath={DeploySVGpath} value={'tab3'}>
            {'Astronaut 2'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>
          {'Tabs.Panel Person 2, variant compact'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab2'}>
          {'Tabs.Panel Bedrift 2, variant compact'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab3'}>
          {'Tabs.Panel Astronaut 2, variant compact'}
        </Tabs.Panel>
      </Tabs>
    </>
  );
};

const TemplateTabsBorder: StoryFn<typeof Tabs.Tab> = (args) => {
  return (
    <Tabs defaultValue={'tab1'} hasBorder>
      <Tabs.List>
        <Tabs.Tab {...args} svgPath={PersonSVGpath} value={'tab1'}>
          {'Person'}
        </Tabs.Tab>
        <Tabs.Tab {...args} svgPath={LockSVGpath} value={'tab2'}>
          {'Bedrift'}
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab1'}>{'Tabs.Panel Person'}</Tabs.Panel>
      <Tabs.Panel value={'tab2'}>{'Tabs.Panel Bedrift'}</Tabs.Panel>
    </Tabs>
  );
};

export const Defaults = {
  name: 'Defaults (A2)',
  render: TemplateTabsTab,
  args: {
    children: 'TabText',
    value: 'tab1',
  },
  argTypes: {
    svgPath: { table: { disable: false } },
  },
  play: async ({ canvasElement }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', { name: 'TabText' });
    await expect(tab).toBeInTheDocument();
  },
} satisfies Story;

export const WithAttributes = {
  name: 'With Attributes (FA2-5, B1)',
  render: TemplateTabs,
  args: {
    ...defaultArgs,
    className: 'dummyClassname',
    lang: 'nb',
    'data-testid': '123ID',
    value: 'TabValue',
  },
  argTypes: {
    id: { table: { disable: true } },
    className: { table: { disable: false } },
    lang: { table: { disable: false } },
    'data-testid': { table: { disable: false } },
  },
  parameters: {
    imageSnapshot: { disable: false },
    a11y: {
      test: 'off',
    },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    const tab = canvas.getByRole('tab', { name: 'Bedrift' });
    await step(
      'Autogenerert id-attributt basert på tab name "tab2"',
      async () => {
        await expect(tab).toHaveAttribute(
          'id',
          expect.stringMatching(/^ds-tab-id-.*-tab2$/)
        );
      }
    );
    await expect(tab).toHaveClass('dummyClassname');
    await expect(tab).toHaveAttribute('lang', 'nb');
    await expect(tab).toHaveAttribute('data-testid', '123ID');
  },
} satisfies Story;

export const WithIcon = {
  name: 'With Icon (A4)',
  render: TemplateTabsIcon,
  args: {
    ...defaultArgs,
    svgPath: PersonSVGpath,
    value: 'tab1',
  },
  parameters: {
    imageSnapshot: { disable: false },
  },
  play: async ({ canvasElement, step }): Promise<void> => {
    const canvas = within(canvasElement);
    await step('Sjekk om svg-ikon finnes', async () => {
      const tab = canvas.getByRole('tab', { name: 'Person' });
      const svg = tab.querySelector('svg');
      await expect(svg).toBeInTheDocument();
    });
  },
} satisfies Story;

export const WithBorder = {
  name: 'With Border (A1',
  render: TemplateTabsBorder,
  args: {
    ...defaultArgs,
    value: 'tab2',
  },
} satisfies Story;
