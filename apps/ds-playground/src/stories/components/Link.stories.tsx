import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';

import {
  category,
  htmlEventDescription,
  svgPathDescription,
} from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Link,
  title: 'Komponenter/Link',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    color: { control: 'inline-radio', table: { category: category.props } },
    isExternal: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    // HTML
    download: { table: { category: category.htmlAttribute } },
    href: { table: { category: category.htmlAttribute } },
    target: { table: { category: category.htmlAttribute } },
    // Aria
    ariaCurrent: { control: 'text', table: { category: category.aria } },
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: 'Er du pendler?',
    href: '#',
  },
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <div className={'exampleSpacing'}>
          <Link href={'#link'}>
            {'Rettledning til RF-1167 Næringsoppgave 2 for 2020 (pdf)'}
          </Link>
        </div>
        <div className={'exampleSpacing'}>
          <Link href={'#link'} isExternal>
            {'Kontakte Statens Vegvesen'}
          </Link>
        </div>
        <div className={'exampleSpacing'}>
          <Link href={'#link'} isExternal>
            {'Brukerveiledning for bilforhandlere'}
          </Link>
        </div>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
