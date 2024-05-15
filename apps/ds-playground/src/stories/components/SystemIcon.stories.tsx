import { JSX } from 'react';

import { sizeArr } from '@skatteetaten/ds-core-utils';
import {
  Icon,
  getIconVariantDefault,
  getIconSizeDefault,
  DeploySVGpath,
  DeployIcon,
} from '@skatteetaten/ds-icons';
import { Meta, StoryObj } from '@storybook/react';

import { category } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Icon,
  title: 'Komponenter/Icon/SystemIcon',
  argTypes: {
    // Props
    size: {
      control: 'select',
      options: [...sizeArr].slice(1),
      table: {
        //type: { summary: [...sizeArr].slice(1) },
        category: category.props,
        defaultValue: { summary: getIconSizeDefault() },
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    title: { table: { category: category.props } },
    variant: {
      control: { disable: true },
      table: {
        category: category.props,
        defaultValue: { summary: getIconVariantDefault() },
      },
    },
    // Aria
    ariaLabel: { table: { category: category.aria } },
  },
  args: {
    svgPath: DeploySVGpath,
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;

export const Examples: Story = {
  render: (_args): JSX.Element => {
    return (
      <>
        <Icon svgPath={DeploySVGpath} size={'small'} />
        <Icon svgPath={DeploySVGpath} size={'medium'} />
        <Icon svgPath={DeploySVGpath} size={'large'} />
        <Icon svgPath={DeploySVGpath} size={'extraLarge'} />

        <div>
          <DeployIcon size={'small'} />
          <DeployIcon size={'medium'} />
          <DeployIcon size={'large'} />
          <DeployIcon size={'extraLarge'} />
        </div>
      </>
    );
  },
} satisfies Story;
Examples.parameters = exampleParameters;
