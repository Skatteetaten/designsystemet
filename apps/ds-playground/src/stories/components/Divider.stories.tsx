import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import {
  Card,
  Divider,
  dividerSpacingArr,
  getDividerSpacingBottomDefault,
  getDividerSpacingTopDefault,
} from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import { category } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Divider,
  title: 'Komponenter/Divider',
  argTypes: {
    // Props
    spacingTop: {
      options: dividerSpacingArr,
      table: {
        category: category.props,
        defaultValue: { summary: getDividerSpacingTopDefault() },
      },
    },
    spacingBottom: {
      options: dividerSpacingArr,
      table: {
        category: category.props,
        defaultValue: { summary: getDividerSpacingBottomDefault() },
      },
    },
    subtle: { table: { category: category.props } },
    // Aria
    ariaHidden: {
      table: { category: category.aria },
    },
  },
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <div className={'flex flexColumn gapXl width400'}>
        <Card>
          <Card.Header>
            <Heading as={'h3'} level={3}>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <Paragraph>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Paragraph>
            <Divider spacingTop={'l'} spacingBottom={'l'} />
            <Paragraph>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Paragraph>
          </Card.Content>
        </Card>
        <Card color={'burgundy'}>
          <Card.Header>
            <Heading as={'h3'} level={3}>
              {'Andre inntekter'}
            </Heading>
          </Card.Header>
          <Card.Content>
            <Paragraph>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Paragraph>

            <Divider spacingTop={'l'} spacingBottom={'l'} subtle />

            <Paragraph>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            </Paragraph>
          </Card.Content>
        </Card>
      </div>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
