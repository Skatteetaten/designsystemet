import { Meta } from '@storybook/react-vite';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import * as BreadcrumbsItemStories from './BreadcrumbsItem.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Breadcrumbs/Item',
  component: Breadcrumbs.Item,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Breadcrumbs.Item>;
export default meta;
export const Snapshots = createSingleStory(BreadcrumbsItemStories, meta);
