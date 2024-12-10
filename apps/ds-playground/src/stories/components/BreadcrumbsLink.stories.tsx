import { Meta, StoryObj } from '@storybook/react';

import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { BreadcrumbsLinkProps, Breadcrumbs } from '@skatteetaten/ds-navigation';

import { category, htmlEventDescription } from '../../../.storybook/helpers';
import { SystemSVGPaths } from '../utils/icon.systems';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Breadcrumbs.Link = { ...Breadcrumbs.Link };
Breadcrumbs.Link.displayName = 'Breadcrumbs.Link';

const meta = {
  component: Breadcrumbs.Link,
  title: 'Komponenter/Breadcrumbs/Link',
  argTypes: {
    // Props
    children: { table: { category: category.props } },
    color: {
      options: [undefined, ...linkColorArr],
      control: 'inline-radio',
      table: {
        category: category.props,
      },
    },
    svgPath: {
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
      table: { category: category.props },
    },
    // HTML
    href: { table: { category: category.htmlAttribute } },
    // Aria
    ariaCurrent: { table: { category: category.aria } },
    ariaDescribedby: { table: { category: category.aria } },
    // Events
    onClick: { ...htmlEventDescription },
  },
  args: {
    children: 'Bedrift og organisasjon',
    href: '#',
  },
} satisfies Meta<BreadcrumbsLinkProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {} satisfies Story;
