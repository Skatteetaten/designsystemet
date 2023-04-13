import { useState } from 'react';

import { Link, LinkProps } from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { AddOutlineSVGpath, CalendarSVGpath } from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';
import { SystemSVGPaths } from '../utils/icon.systems';

const elementId = 'htmlId';
const systemIconViewBox = '0 0 24 24';
const defaultLinkText = 'Er du pendler?';

const verifyAttribute =
  (attribute: string, expectedValue: string) =>
  async ({ canvasElement }: { canvasElement: HTMLElement }): Promise<void> => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('link')).toHaveAttribute(
      attribute,
      expectedValue
    );
  };
export default {
  component: Link,
  title: 'Tester/Link',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: { table: { disable: true } },
    isExternal: { table: { disable: true } },
    color: { table: { disable: true } },
    svgPath: {
      table: { disable: true },
      options: Object.keys(SystemSVGPaths),
      mapping: SystemSVGPaths,
    },
    title: { table: { disable: true } },
    // HTML
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    // Aria
    ariaDescribedby: { table: { disable: true } },
    // Events
    onBlur: { table: { disable: true } },
    onClick: { table: { disable: true } },
    onFocus: { table: { disable: true } },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <div className={'noTransition'} data-test-block>
    <Link {...args} onClick={(e): void => e.preventDefault()}>
      {/* eslint-disable-next-line testing-library/no-node-access */}
      {args.children}
    </Link>
  </div>
);

const defaultArgs: LinkProps = {
  href: '#root',
  children: defaultLinkText,
};

// Når Link har en ref, så får dom a elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLAnchorElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.parameters = {
  imageSnapshot: { disable: true },
};
WithRef.play = verifyAttribute('id', 'dummyIdForwardedFromRef');

// Når Link har en id, så har a-element id
// Når Link har en custom CSS, så vises custom stil
// Når Link har en lang, så har a-element lang
// Når Link har dataTestid, så har a-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes(FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: elementId,
  className: 'dummyClassname',
  lang: 'nb',
  'data-testid': '123ID',
};
WithAttributes.argTypes = {
  ...WithAttributes.argTypes,
  id: { table: { disable: false } },
  className: { table: { disable: false } },
  lang: { table: { disable: false } },
  'data-testid': { table: { disable: false } },
};
WithAttributes.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  await expect(link).toHaveClass('dummyClassname');
  await expect(link).toHaveAttribute('id', elementId);
  await expect(link).toHaveAttribute('lang', 'nb');
  await expect(link).toHaveAttribute('data-testid', '123ID');
};

// Når Link instansieres, så får den riktige default-verdier og rendrer riktig i ulike tilstander
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults (A1 delvis, A2, A3 delvis, B1)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  href: { table: { disable: false } },
  children: { table: { disable: false } },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > a`,
    focus: `${wrapper} > a`,
    click: `${wrapper} > a`,
  },
};
Defaults.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  await expect(link).not.toHaveAttribute('rel');
  await expect(link).not.toHaveAttribute('target');

  // eslint-disable-next-line testing-library/no-node-access
  const svg = link.querySelector('svg');
  await expect(svg).not.toBeInTheDocument();
  expect(link).toHaveTextContent(defaultLinkText);
};

// Når Link har en veldig lang tekst så skal tekst venstrejusteres
export const WithLongText = Template.bind({});
WithLongText.storyName = 'With Long Text (A1 delvis)';
WithLongText.args = {
  ...defaultArgs,
  children:
    'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert uansett om ikon eller ikke.',
};
WithLongText.argTypes = {
  ...WithLongText.argTypes,
  children: { table: { disable: false } },
};

// Når Link har en veldig lang tekst uten breaking space så skal det brekke over flere linjer
export const WithLongTextBreaking = Template.bind({});
WithLongTextBreaking.storyName = 'With Long Text And Breaking (A1 delvis)';
WithLongTextBreaking.args = {
  ...defaultArgs,
  children:
    'Dennelenkenharenveldiglangtekst.Sålangatdentvingerframlinjeskiftmedtekstsomalltidervenstrejustertuansettomikonellerikke.',
};
WithLongTextBreaking.argTypes = {
  ...WithLongTextBreaking.argTypes,
  children: { table: { disable: false } },
};

// Når Link har en veldig lang tekst, valgfritt ikon og eksternal ikon så skal tekst venstrejusteres
export const WithLongTextIconAndExternalIcon = Template.bind({});
WithLongTextIconAndExternalIcon.storyName =
  'With Long Text And Icons (A1 delvis)';
WithLongTextIconAndExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
  svgPath: CalendarSVGpath,
  children:
    'Denne lenken har en veldig lang tekst med ikon på venstre side. Så lang at den lange teksten tvinger fram linjeskift hvor tekst er venstrejustert.',
};
WithLongTextIconAndExternalIcon.argTypes = {
  ...WithLongTextIconAndExternalIcon.argTypes,
  isExternal: { table: { disable: false } },
  svgPath: { table: { disable: false } },
  children: { table: { disable: false } },
};

// Når Link har ett valgfritt ikon, så vises ikonet. Tester også for de icon props som er relevant for saken med systemIcon som er brukt
export const WithIcon = Template.bind({});
WithIcon.storyName = 'With Icon (A4, B2)';
WithIcon.args = {
  ...defaultArgs,
  svgPath: CalendarSVGpath,
};
WithIcon.argTypes = {
  ...WithIcon.argTypes,
  svgPath: { table: { disable: false } },
};
WithIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = link.querySelector('svg');
  await expect(svg).toHaveAttribute('aria-hidden', 'true');
  await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
};

// Når Link har isExternal, så vises riktig ikon med tilhørende tekst. Tester også for de icon props som er relevant for saken med systemIcon som er brukt
export const WithExternalIcon = Template.bind({});
WithExternalIcon.storyName = 'With External Icon (A5)';
WithExternalIcon.args = {
  ...defaultArgs,
  isExternal: true,
};
WithExternalIcon.argTypes = {
  ...WithExternalIcon.argTypes,
  isExternal: { table: { disable: false } },
};
WithExternalIcon.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  // eslint-disable-next-line testing-library/no-node-access
  const svg = link.querySelector('svg');
  await expect(svg).toHaveAttribute('aria-label', 'Til et annet nettsted');
  await expect(svg).toHaveAttribute('viewBox', systemIconViewBox);
};

// Når Link har color white, så vises tekst og ikon i hvit
export const WithColor = Template.bind({});
WithColor.storyName = 'With Color (A6)';
WithColor.args = {
  ...defaultArgs,
  color: 'white',
  isExternal: true,
  svgPath: AddOutlineSVGpath,
};
WithColor.argTypes = {
  ...WithColor.argTypes,
  color: {
    options: ['default', ...linkColorArr],
    mapping: {
      default: '',
      ...linkColorArr,
    },
    control: 'inline-radio',
    table: {
      disable: false,
    },
  },
};
WithColor.parameters = {
  backgrounds: {
    default: 'themePrimary',
  },
  imageSnapshot: {
    hover: `${wrapper} > a`,
    focus: `${wrapper} > a`,
  },
};

// Når Link har target, så har link-elementet target med riktig verdi
export const WithTarget = Template.bind({});
WithTarget.storyName = 'With Target (A2)';
WithTarget.args = {
  ...defaultArgs,
  target: '_blank',
};
WithTarget.argTypes = {
  ...WithTarget.argTypes,
  target: { table: { disable: false } },
};
WithTarget.parameters = {
  imageSnapshot: { disable: true },
};

WithTarget.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  expect(link).toHaveAttribute('rel', 'noreferrer');
  expect(link).toHaveAttribute('target', '_blank');
};

// Når Link har ariaDescribedby, så har link element aria-describedby satt
export const WithAriaDescribedby = Template.bind({});
WithAriaDescribedby.storyName = 'With AriaDescribedby (B3)';
WithAriaDescribedby.args = {
  ...defaultArgs,
  ariaDescribedby: elementId,
};
WithAriaDescribedby.argTypes = {
  ...WithAriaDescribedby.argTypes,
  ariaDescribedby: { table: { disable: false } },
};
WithAriaDescribedby.parameters = {
  imageSnapshot: { disable: true },
};
WithAriaDescribedby.play = verifyAttribute('aria-describedby', elementId);

// Når brukeren klikker på lenken, så kalles funksjonen i onClick prop.
// onClick-event endrer lenketeksten til lenken
const nyLinkText = 'Ny lenketekst slik at vi ser at event fungerte';
const OnClickTemplate: ComponentStory<typeof Link> = (args) => {
  const [linkText, setLinkText] = useState(
    'Klikk på lenken for å teste onClick event'
  );
  return (
    <div className={'noTransition'} data-test-block>
      <Link
        {...args}
        onClick={(e): void => {
          e.preventDefault();
          setLinkText(nyLinkText);
          args.onClick && args.onClick(e);
        }}
      >
        {linkText}
      </Link>
    </div>
  );
};
export const WithOnClick = OnClickTemplate.bind({});
WithOnClick.storyName = 'With onClick (A3 delvis)';
WithOnClick.args = {
  ...defaultArgs,
  svgPath: CalendarSVGpath,
};
WithOnClick.argTypes = {
  ...WithOnClick.argTypes,
  svgPath: { table: { disable: false } },
  onClick: { table: { disable: false } },
};
WithOnClick.parameters = {
  imageSnapshot: { disbale: true },
};
WithOnClick.play = async ({ args, canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const link = canvas.getByRole('link');
  await expect(link).toHaveTextContent(
    'Klikk på lenken for å teste onClick event'
  );
  await userEvent.click(link);
  await expect(link).toHaveTextContent(
    'Ny lenketekst slik at vi ser at event fungerte'
  );
  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
