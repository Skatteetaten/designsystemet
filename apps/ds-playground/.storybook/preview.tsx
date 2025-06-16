import { JSX } from 'react';

import { useEffect, useGlobals } from 'storybook/preview-api';
import { Decorator, Preview } from '@storybook/react';
import * as MockDate from 'mockdate';

import breakpoints from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';

import { category } from './helpers';
import '@skatteetaten/ds-core-designtokens/index.css';
import './playground.css';
import '../src/stories/designtokens/designtokens.css';

if (process.env.NODE_ENV === 'development') {
  import('./abomination.css');
}

const LanguageUpdater: Decorator = (Story, context) => {
  const [{ locale }, updateGlobals] = useGlobals();
  useEffect(() => {
    const locale = context.parameters.locale;
    if (locale) {
      updateGlobals({ locale: context.parameters.locale });
    }
  }, [context.parameters.locale, updateGlobals]);
  useEffect(() => {
    dsI18n.changeLanguage(locale);
    const lang = locale.substring(0, locale.indexOf('_'));
    document.documentElement.setAttribute('lang', lang);
  }, [locale]);
  return <Story />;
};

const testBlock: Decorator = (Story, context) => {
  if (context.title.startsWith('Tester')) {
    return (
      <div data-test-block>
        <Story />
      </div>
    );
  } else {
    return <Story />;
  }
};

const mockDate: Decorator = (Story, context) => {
  MockDate.reset();
  if (context.parameters.mockDate) {
    MockDate.set(context.parameters.mockDate);
  }
  return <Story />;
};

const makeViewPort = (
  dsbreakpoint: keyof typeof breakpoints | '--mobile'
): object => {
  return {
    [dsbreakpoint]: {
      name: dsbreakpoint,
      styles: {
        width:
          dsbreakpoint === '--mobile' ? '320px' : breakpoints[dsbreakpoint],
        height: '100%',
      },
    },
  };
};

const DSViewports = {
  ...makeViewPort('--mobile'),
  ...makeViewPort('--breakpoint-xs'),
  ...makeViewPort('--breakpoint-s'),
  ...makeViewPort('--breakpoint-m'),
  ...makeViewPort('--breakpoint-l'),
  ...makeViewPort('--breakpoint-xl'),
};

const parameters = {
  docs: {
    controls: { sort: 'requiredFirst' },
  },
  actions: {
    disable: true,
  },
  controls: {
    sort: 'requiredFirst',
    hideNoControlsWarning: true,
  },
  viewport: { viewports: DSViewports },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Generelt',
        'Designtokens',
        'Sidetyper',
        'Verktøy',
        'Komponenter',
        'Tester',
      ],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'var(--palette-graphite-0)',
      },
      {
        name: 'dark',
        value: 'var(--palette-graphite-100)',
      },
      {
        name: 'grey',
        value: 'var(--palette-graphite-70)',
      },
      {
        name: 'themePrimary',
        value: 'var(--theme-primary)',
      },
    ],
  },
};

const argTypes = {
  ref: {
    control: { disable: true },
    description: 'React ref',
    table: {
      category: category.baseProps,
    },
  },
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'html class attributt til noden',
    table: {
      type: { summary: 'string' },
      category: category.baseProps,
      defaultValue: { summary: getCommonClassNameDefault() },
    },
  },
  id: {
    control: 'text',
    description: 'html id attributt',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  lang: {
    control: 'text',
    description: 'html lang attributt',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  'data-testid': {
    control: 'text',
    description: 'html data attributt som brukes for tester',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
} satisfies Preview['argTypes'];

const langs = Object.entries(Languages).map(([key, value]) => ({
  title: key,
  value,
}));

const Spacing = [
  { title: 'On', value: 'spacing' },
  { title: 'Off', value: 'no-spacing' },
];

const clearStyles = (element: HTMLElement): void => {
  for (const className of Object.values(Spacing)) {
    element.classList.remove(className.value);
  }
};

const applyStyle = (element: HTMLElement, className: string): void => {
  element.classList.add(className);
};

const SpacingUpdater: Decorator = (Story, context) => {
  useEffect(() => {
    const body = window.document.body;
    clearStyles(body);
    applyStyle(body, context.globals.spacing);
    return (): void => {
      clearStyles(body);
    };
  }, [context.globals.spacing]);
  return <Story />;
};

const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: Languages.Bokmal,
    toolbar: {
      icon: 'globe',
      items: [...langs, { title: 'key', value: 'cimode' }],
    },
  },
  spacing: {
    name: 'Spacing',
    description: 'Remove padding and margin around component',
    defaultValue: Spacing[0].value,
    toolbar: {
      title: 'Margin',
      icon: 'browser',
      items: Spacing,
    },
  },
};

const preview = {
  decorators: [
    (Story): JSX.Element => <Story />,
    LanguageUpdater,
    testBlock,
    mockDate,
    SpacingUpdater,
  ],
  parameters,
  globalTypes,
  argTypes,
  //workaround for https://github.com/storybookjs/storybook/issues/30385
  initialGlobals: {
    a11y: {
      manual: true,
    },
  },
  tags: ['autodocs'],
} satisfies Preview;
export default preview;
