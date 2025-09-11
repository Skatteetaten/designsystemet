import { Meta } from '@storybook/react-vite';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import * as BreadcrumbsStories from './Breadcrumbs.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Breadcrumbs>;
export default meta;
export const Snapshots = createSingleStory(BreadcrumbsStories, meta);
