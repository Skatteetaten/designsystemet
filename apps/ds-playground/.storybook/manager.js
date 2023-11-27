import { addons } from '@storybook/addons';

import theme from './theme';

import '@skatteetaten/ds-core-designtokens/index.css';

const getTestStoryFilters = () => {
  const isDevOrSnapshot =
    process.env.NODE_ENV === 'development' ||
    process.env.STORYBOOK_BUILD_VERSION?.includes('-SNAPSHOT');
  if (isDevOrSnapshot) {
    return {};
  } else {
    return {
      tests: (item) => {
        return !item.title.startsWith('Tester/');
      },
    };
  }
};

addons.setConfig({
  theme: theme,
  sidebar: {
    filters: {
      patterns: (item) => {
        return !item.tags.includes('isHidden');
      },
      ...getTestStoryFilters(),
    },
  },
});
