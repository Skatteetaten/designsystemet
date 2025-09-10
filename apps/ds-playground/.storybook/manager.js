import { addons } from 'storybook/manager-api';

import theme from './theme';

import '@skatteetaten/ds-core-designtokens/index.css';

const getStoryFilters = () => {
  const isDevOrSnapshot =
    process.env.NODE_ENV === 'development' ||
    process.env.STORYBOOK_BUILD_VERSION?.includes('-SNAPSHOT');
  if (isDevOrSnapshot) {
    return {};
  } else {
    return {
      tests: (item) => {
        console.log(item);
        return !item.title.startsWith('Tester/');
      },
      chromatic: (item) => {
        return !item.tags.includes('chromatic');
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
      ...getStoryFilters(),
    },
  },
});
