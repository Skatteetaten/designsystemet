import { JSX } from 'react';

import { linkTo } from '@storybook/addon-links';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from '@skatteetaten/ds-buttons';
import { RoleBanner } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: RoleBanner,
  title: 'Komponenter/RoleBanner',
  argTypes: {
    // Baseprops
    ref: { table: { category: category.baseProps } },
    id: { table: { category: category.baseProps } },
    className: { table: { category: category.baseProps } },
    lang: { table: { category: category.baseProps } },
    'data-testid': { table: { category: category.baseProps } },
    // Props
    user: {
      table: { category: category.props },
    },
    isSticky: {
      table: { category: category.props, defaultValue: { summary: 'false' } },
    },
  },
  args: {
    user: { name: 'Ola Nordmann', role: 'meg', identifier: '12345678901' },
  },
} satisfies Meta<typeof RoleBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (args): JSX.Element => {
    return (
      <>
        <Paragraph hasSpacing>
          {'Velg "logg inn" i '}
          <Link
            href={'#'}
            onClick={(e) => {
              e.preventDefault();
              linkTo('Sidetyper/Ekstern/Skjema Med Steg', 'Skjema Med Steg')();
            }}
          >
            {'skjema med steg'}
          </Link>
          {' for å se eksempel i kontekst.'}
        </Paragraph>
        <RoleBanner {...args} />
      </>
    );
  },
  parameters: exampleParameters,
} satisfies Story;
