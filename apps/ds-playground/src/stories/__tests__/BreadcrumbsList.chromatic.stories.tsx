import { Meta } from '@storybook/react-vite';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import * as BreadcrumbsListStories from './BreadcrumbsList.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Breadcrumbs/List',
  component: Breadcrumbs.List,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Breadcrumbs.List>;
export default meta;
export const Snapshots = createSingleStory(BreadcrumbsListStories, meta);
