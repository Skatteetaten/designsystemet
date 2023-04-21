import {
  LinkGroup,
  LinkGroupProps,
  linkGroupVariantArr,
} from '@skatteetaten/ds-buttons';
import { linkColorArr } from '@skatteetaten/ds-core-utils';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';
import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { wrapper } from './testUtils/storybook.testing.utils';

export default {
  component: LinkGroup,
  title: 'Tester/LinkGroup',
  argTypes: {
    // Baseprops
    key: { table: { disable: true } },
    ref: { table: { disable: true } },
    className: { table: { disable: true } },
    id: { table: { disable: true } },
    lang: { table: { disable: true } },
    'data-testid': { table: { disable: true } },
    // Props
    children: {
      table: { disable: true },
      control: { type: null },
    },
    hasSpacing: { table: { disable: true } },
    color: { table: { disable: true } },
    variant: {
      table: { disable: true },
      options: [...linkGroupVariantArr],
      control: 'inline-radio',
    },
  },
} as ComponentMeta<typeof LinkGroup>;

const Template: ComponentStory<typeof LinkGroup> = (args) => (
  <div data-test-block>
    <LinkGroup {...args} />
  </div>
);

const defaultArgs: LinkGroupProps = {
  children: [
    <LinkGroup.Link
      key={'linkGroupLink_1'}
      href={'#root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Er du pendler?'}
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_2'}
      href={'#root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Pendler du mye?'}
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_3'}
      href={'#root'}
      onClick={(e): void => e.preventDefault()}
    >
      {'Pendler du dagen lang?'}
    </LinkGroup.Link>,
  ],
};

// Når LinkGroup har en ref, så får dom a elementet ref forwarded
export const WithRef = Template.bind({});
WithRef.storyName = 'With Ref (FA1)';
WithRef.args = {
  ...defaultArgs,
  ref: (instance: HTMLUListElement | null): void => {
    if (instance) {
      instance.id = 'dummyIdForwardedFromRef';
    }
  },
};
WithRef.argTypes = {
  ...WithRef.argTypes,
  ref: { table: { disable: false } },
};
WithRef.play = async ({ canvasElement }): Promise<void> => {
  const canvas = within(canvasElement);
  const linkGroup = canvas.getByRole('list');
  await expect(linkGroup).toHaveAttribute('id', 'dummyIdForwardedFromRef');
};

// Når LinkGroup har en id, så har ul-element id
// Når LinkGroup har en custom CSS, så vises custom stil
// Når LinkGroup har en lang, så har ul-element lang
// Når LinkGroup har dataTestid, så har ul-elementet data-testid satt
export const WithAttributes = Template.bind({});
WithAttributes.storyName = 'With Attributes (FA2-5)';
WithAttributes.args = {
  ...defaultArgs,
  id: 'htmlId',
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
  const linkGroup = canvas.getByRole('list');
  await expect(linkGroup).toHaveClass('dummyClassname');
  await expect(linkGroup).toHaveAttribute('id', 'htmlId');
  await expect(linkGroup).toHaveAttribute('lang', 'nb');
  await expect(linkGroup).toHaveAttribute('data-testid', '123ID');
};

// Når LinkGroup instansieres, så vises default-variant list og rendrer riktig ulike tilstander (imageSnapshot viser kun ulike tilstander av listItem og ikke link)
export const Defaults = Template.bind({});
Defaults.storyName = 'Defaults Variant List (A1 delvis, A4 delvis, A5)';
Defaults.args = {
  ...defaultArgs,
};
Defaults.argTypes = {
  ...Defaults.argTypes,
  children: {
    table: { disable: false },
  },
};
Defaults.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > ul > li:first-child > a`,
    focus: `${wrapper} > ul > li:first-child > a`,
    click: `${wrapper} > ul > li:first-child > a`,
  },
};

// Når LinkGroup instansieres, så vises variant anchors og rendrer riktig ulike tilstander (imageSnapshot viser kun ulike tilstander av listItem og ikke link)
export const VariantAnchors = Template.bind({});
VariantAnchors.storyName = 'Variant Anchors (A1 delvis, A4 delvis, A6)';
VariantAnchors.args = {
  ...defaultArgs,
  variant: 'anchors',
};
VariantAnchors.argTypes = {
  ...VariantAnchors.argTypes,
  variant: {
    table: {
      disable: false,
    },
  },
};
VariantAnchors.parameters = {
  imageSnapshot: {
    hover: `${wrapper} > ul > li:first-child > a`,
  },
};

// Når LinkGroup har en veldig lang tekst, valgfritt ikon og/eller external ikon så skal teksten og ikon ha hengende innrykk
export const WithLongTextAndIcons = Template.bind({});
WithLongTextAndIcons.storyName = 'With Long Text And Icons (A2)';
WithLongTextAndIcons.args = {
  ...defaultArgs,
  children: [
    <LinkGroup.Link key={'linkGroupLink_1'} href={'#root'} isExternal>
      {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' +
        'uansett om ikon eller ikke og får et hengende innrykk.'}
    </LinkGroup.Link>,
    <LinkGroup.Link
      key={'linkGroupLink_2'}
      href={'#root'}
      svgPath={CalendarSVGpath}
    >
      {'Denne lenken har en veldig lang tekst. Så lang at den lange teksten tvinger fram linjeskift med tekst som alltid er venstrejustert ' +
        'uansett om ikon eller ikke og får et hengende innrykk.'}
    </LinkGroup.Link>,
  ],
};
WithLongTextAndIcons.argTypes = {
  ...WithLongTextAndIcons.argTypes,
  children: { table: { disable: false } },
};

const TemplateWithTwoLinkGroups: ComponentStory<typeof LinkGroup> = (args) => (
  <div data-test-block>
    <LinkGroup {...args} />
    <LinkGroup {...args} />
  </div>
);

// Når LinkGroup har spacing, så får gruppen en margin under gruppen
export const WithSpacing = TemplateWithTwoLinkGroups.bind({});
WithSpacing.storyName = 'With Spacing (A3)';
WithSpacing.args = {
  ...defaultArgs,
  hasSpacing: true,
};
WithSpacing.argTypes = {
  ...WithSpacing.argTypes,
  hasSpacing: { table: { disable: false } },
};

// Når LinkGroup har color white, så vises tekster og ikoner i hvit
export const WithColor = Template.bind({});
WithColor.storyName = 'With Color (A7)';
WithColor.args = {
  ...defaultArgs,
  color: 'white',
};
WithColor.argTypes = {
  ...WithColor.argTypes,
  color: {
    options: ['default', ...linkColorArr],
    mapping: {
      default: '',
      ...linkColorArr,
    },
    table: { disable: false },
  },
};
WithColor.parameters = {
  backgrounds: {
    default: 'themePrimary',
  },
  imageSnapshot: {
    hover: `${wrapper} > ul > li:first-child > a`,
    focus: `${wrapper} > ul > li:first-child > a`,
    click: `${wrapper} > ul > li:first-child > a`,
  },
};
