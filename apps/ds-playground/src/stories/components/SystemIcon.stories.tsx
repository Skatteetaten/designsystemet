import { JSX } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Icon, DeploySVGpath, DeployIcon } from '@skatteetaten/ds-icons';

import { category, svgPathDescription } from '../../../.storybook/helpers';
import { exampleParameters } from '../utils/stories.utils';

const meta = {
  component: Icon,
  title: 'Komponenter/Icon/SystemIcon',
  argTypes: {
    // Props
    size: { table: { category: category.props } },
    svgPath: { ...svgPathDescription },
    title: { table: { category: category.props } },
    variant: { control: false, table: { category: category.props } },
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
