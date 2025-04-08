import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Tabs, getTabsVariantDefault } from '@skatteetaten/ds-collections';
import {
  AccountMultipleSVGpath,
  BriefcaseSVGpath,
  PersonSVGpath,
} from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { loremIpsum } from '../__tests__/testUtils/storybook.testing.utils';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Tabs,
  title: 'Komponenter/Tabs/Tabs',
  argTypes: {
    // Props
    children: { control: false, table: { category: category.props } },
    value: { control: 'text', table: { category: category.props } },
    defaultValue: { control: 'text', table: { category: category.props } },
    isMultiline: { table: { category: category.props } },
    variant: {
      control: 'inline-radio',
      table: {
        category: category.props,
        defaultValue: { summary: getTabsVariantDefault() },
      },
    },
    hasBorder: { table: { category: category.props } },
    //Events
    onChange: { ...htmlEventDescription },
  },
  args: {
    defaultValue: 'tab1',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List key={'list1'}>
        <Tabs.Tab value={'tab1'}>{'Alle oppgaver'}</Tabs.Tab>
        <Tabs.Tab value={'tab2'}>{'Prioritert'}</Tabs.Tab>
        <Tabs.Tab value={'tab3'}>{'Nye'}</Tabs.Tab>
        <Tabs.Tab value={'tab4'}>{'Mine oppgaver'}</Tabs.Tab>
        <Tabs.Tab value={'tab5'}>{'Utgått frist (+99)'}</Tabs.Tab>
        <Tabs.Tab value={'tab6'}>{'Nylig endret'}</Tabs.Tab>
        <Tabs.Tab value={'tab7'}>{'Arkitverte (18)'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel key={'panel1'} value={'tab1'}>
        {'Alle oppgaver - Tabs.Panel 1'}
      </Tabs.Panel>
      <Tabs.Panel key={'panel2'} value={'tab2'}>
        {'Prioritert - Innhold i Tabs.Panel 2'}
      </Tabs.Panel>
      <Tabs.Panel key={'panel3'} value={'tab3'}>
        {'Nye - Innhold i Tabs.Panel 3'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab4'}>
        {'Mine oppgaver - ubehandlede. Panel 4'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab5'}>{'Utgått frist - Nye. Panel 5'}</Tabs.Panel>
      <Tabs.Panel value={'tab6'}>{'Nylig endret - Alle. Panel 6'}</Tabs.Panel>
      <Tabs.Panel value={'tab7'}>{'Arkitverte - Ingen. Panel 7'}</Tabs.Panel>
    </Tabs>
  ),
} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <Tabs defaultValue={'tab1'} isMultiline>
        <Tabs.List>
          <Tabs.Tab value={'tab1'} svgPath={PersonSVGpath}>
            {'Mine oppgaver (12)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab2'} svgPath={AccountMultipleSVGpath}>
            {'Tildelt til andre (77)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab3'} svgPath={BriefcaseSVGpath}>
            {'Ubehandlede oppgaver (99+)'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab4'} svgPath={BriefcaseSVGpath}>
            {'Langtekst som gjør at det må brekke'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab5'} svgPath={BriefcaseSVGpath}>
            {'Langtekst som gjør at det må brekke'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab1'}>
          <Heading as={'h3'} level={3}>
            {'Mine oppgaver'}
          </Heading>
          {loremIpsum}
        </Tabs.Panel>
        <Tabs.Panel value={'tab2'}>
          <Heading as={'h3'} level={3}>
            {'Tildelt andre'}
          </Heading>
          {
            'Lorem ipsum dolor sit amet, skattemyndighetene consectetuer adipiscing elit. Donec odio magna, sagittis eget rutrum quis, egestas vel nibh. Nullam eleifend ultricies eros, at accumsan nisl tincidunt sed. Vivamus vestibulum semper laoreet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Phasellus vel sapien eu magna laoreet rutrum. Curabitur eleifend tincidunt laoreet. Proin quam nibh, placerat vel blandit eu, placerat in tellus. Aenean lorem sem, malesuada in libero ut, mollis pretium turpis. Donec vitae sapien eu libero rutrum rutrum. Nam quis lacus neque. Pellentesque ultrices mattis odio. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas fermentum tortor at risus.'
          }
        </Tabs.Panel>
        <Tabs.Panel value={'tab3'}>
          <Heading as={'h3'} level={3}>
            {'Ubehandlede'}
          </Heading>
          <ul>
            <li>{'oppgave 1'}</li>
            <li>{'oppgave2'}</li>
          </ul>
        </Tabs.Panel>
      </Tabs>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
