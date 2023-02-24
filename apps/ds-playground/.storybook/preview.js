import breakpoints from '@skatteetaten/ds-core-designtokens/designtokens/breakpoints.json';
import palette from '@skatteetaten/ds-core-designtokens/designtokens/palette.json';
import {
  dsI18n,
  getCommonClassNameDefault,
  Languages,
} from '@skatteetaten/ds-core-utils';
import { useEffect, useGlobals } from '@storybook/client-api';

import { category } from './helpers';
import '@skatteetaten/ds-core-designtokens/index.css';
import './playground.css';
import '../src/stories/designtokens/designtokens.css';

const LanguageUpdater = (Story, context) => {
  const [{ locale }, updateGlobals] = useGlobals();
  useEffect(() => {
    const locale = context.parameters.locale;
    if (locale) {
      updateGlobals({ locale: context.parameters.locale });
    }
  }, [context.parameters.locale, updateGlobals]);
  useEffect(() => {
    dsI18n.changeLanguage(locale);
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);
  return <Story />;
};

export const decorators = [(Story) => <Story />, LanguageUpdater];

const makeViewPort = (dsbreakpoint) => {
  return {
    [dsbreakpoint]: {
      name: dsbreakpoint,
      styles: {
        width: breakpoints[dsbreakpoint],
        height: '100%',
      },
    },
  };
};

const DSViewports = {
  ...makeViewPort('--breakpoint-xs'),
  ...makeViewPort('--breakpoint-s'),
  ...makeViewPort('--breakpoint-m'),
  ...makeViewPort('--breakpoint-l'),
  ...makeViewPort('--breakpoint-xl'),
};

export const parameters = {
  controls: { sort: 'alpha' },
  viewport: { viewports: DSViewports },
  options: {
    storySort: {
      order: ['Generelt', 'Designtokens', 'Komponenter', 'Tester'],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: palette[':root,\n:host']['--palette-graphite-0'],
      },
      {
        name: 'dark',
        value: palette[':root,\n:host']['--palette-graphite-100'],
      },
    ],
  },
};

export const argTypes = {
  key: {
    control: false,
    description:
      'Spesielt string attributt som brukes for å iterere gjennom elementer',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  ref: {
    control: false,
    description: 'React ref sendt gjennom React.forwardref',
    table: {
      type: { summary: 'React.ForwardedRef' },
      category: category.baseProps,
    },
  },
  className: {
    control: 'select',
    options: ['', 'dummyClassname'],
    description: 'html class til noden',
    table: {
      type: { summary: 'string' },
      category: category.baseProps,
      defaultValue: { summary: getCommonClassNameDefault() },
    },
  },
  id: {
    control: 'text',
    description: 'unik id attribute',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  lang: {
    control: 'text',
    description: 'html lang attribute',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
  'data-testid': {
    control: 'text',
    description: 'data attribute som brukes for tester',
    table: { type: { summary: 'string' }, category: category.baseProps },
  },
};

const langs = Object.entries(Languages).map(([key, value]) => ({
  title: key,
  value,
}));

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: Languages.Bokmal,
    toolbar: {
      icon: 'globe',
      items: [...langs, { title: 'key', value: 'cimode' }],
    },
  },
};
