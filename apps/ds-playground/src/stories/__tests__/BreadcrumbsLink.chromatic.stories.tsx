import { Meta } from '@storybook/react-vite';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

import * as BreadcrumbsLinkStories from './BreadcrumbsLink.test.stories';
import { createSingleStory } from '../utils/createSingleStory';

const meta = {
  title: 'Chromatic/Breadcrumbs/Link',
  component: Breadcrumbs.Link,
  tags: ['chromatic', '!autodocs'],
} satisfies Meta<typeof Breadcrumbs.Link>;
export default meta;
export const Snapshots = createSingleStory(BreadcrumbsLinkStories, meta);
